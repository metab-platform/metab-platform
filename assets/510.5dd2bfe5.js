const a=[-.02,.05,.35,.02,.38,.21,.24,.36,-.02,.4,.03,.06,-.14,-.39,-.07,.12,.16,-.02,-.15,.11,-.24,-.76,.23,-.24,.02,.28,-.77,.41,.15,-.77,.48,-.67,.39,.35,-.15,.12,.2,-.15,.27,.18,-.21,.33,.5,.02,.1,-.22,-.1,-.17,-.57,.46,.06,.04,.11,.22,.69,-.03,-.05,.47,.05,.3,.88,.41,.48,.05,-.31,-.57,.45,-.24,-.23,.03,-.02,.14,.8,-.15,.3,0,-.28,.9,.07,-.21,-.32,.26,-.08,.29,-.13,-.68,.24,-.03,-.37,.07,.67,.07,.38,-.14,-.01,.04,-.33,-.17,-.06,.86,-.06,.45,.47,.04,.54,-.03,-.44,-.57,.28,.45,-.02,.64,.05,-.19,-.19,.07,.11,-.6,-.33,.15,-.1,-.33,.34,-.09,.09,.45,.32,-.17,-.24,.22,.43,-.02,-.01,.59,.06,-.23,.67,.21,-.53,.1,.56,.19,.52,.28,.2,.04,-.04,.2,.51,-.12,.48,.4,0,.13,.43,.64,-.24,.08,-.08,-.15,.52,.53,.01,.49,.4,.83,.32,-.48,.26,.23,.15,-.32,.53,.21,.28,-.59,.07,-.77,.74,.31,-.24,.07,.24,.06,.58,.08,.01,.32,.7,.04,.07,.67,-.05,.58,.7,.33,.61,.26,-.07,-.53,-.06,.55,.26,.04,-.29,.69,.01,.58,.73,-.09,.45,-.12,.05,.09,.43,.55,0,.48,-.57,-.7,.35,.43,.44,.29,.3,.26,.57,-.48,.49,.28,-.05,.04,-.05,.3,-.13,.21,-.09,-.33,.27,.03,.78,-.17,.38,.6,.45,.31,.05,.2,-.03,.06,.52,-.41,.7,.23,.55,-.25,-.02,.28,.2,.12,-.1,.49,.42,.55,.31,.52,-.24,.32,0,.2,-.3,-.03,.29,.35,.12,-.06,-.61,.78,.43,-.59,.77,-.77,-.05,-.23,.38,.3,-.67,.15,.38,-.59,.22,.64,.35,.3,.26,.53,.04,-.17,.24,.35,.18,.29,-.47,-.12,.22,.11,-.33,.7,.49,-.11,.45,.05,-.24,.17,.13,.34,.24,.61,.37,.35,.36,-.01,-.12,.39,.31,.39,.32,-.11,-.14,.35,-.37,.36,.11,-.04,-.64,-.09,-.46,.4,-.02,-.55,.72,.47,-.16,-.09,.15,.4,.08,.78,.45,.39,.57,.44,.22,.37,-.3,-.03,.37,-.14,.5,.19,-.01,.13,.35,-.62,-.08,-.25,.19,.27,.91,.04,-.57,-.09,-.09,.16,.89,.46,.04,.27,-.04,.62,-.06,.03,-.01,.1,.07,.2,-.03,-.01,.33,.35,.48,-.15,.09,.08,.01,.3,-.69,-.11,-.06,.05,-.19,.21,.47,.03,.65,.05,-.06,.52,.46,.3,.34,-.3,.07,.48,.39,.07,.53,.06,.78,-.32,.26,.13,-.37,-.1,-.08,.2,.23,-.04,.43,.27,.32,.12,.12,.18,.58,.19,-.02,.35,.38,.65,.59,.38,.52,-.2,.48,.61,.24,.37,-.13,-.49,.44,.58,-.45,.15,-.15,.18,-.78,.28,.44,.36,.38,.47,-.33,.82,.03,-.03,-.12,-.01,-.27,.2,-.53,.24,.35,.02,.66,.27,.5,.31,.33,-.82,.56,.03,.37,.34,.55,.14,.47,.17,.05,.27,-.05,.06,-.4,.15,.51,.23,.24,-.14,.35,.53,.56,-.03,.4,.05,.43,.06,.34,.3,.17,1,.64,.16,.49,.26,.53,-.48,.67,.4,.8,.23,-.1,.4,.11,.02,.51,.1,-.01,.32,0,.49,.58,.21,-.05,.38,.2,.39,.44,.12,.21,-.02,-.13,.62,-.22,-.71,-.07,-.02,.35,-.73,.37,.1,-.66,.26,.4,.23,.45,-.11,-.41,.35,-.18,-.03,.27,-.54,-.02,.28,-.04,-.12,0,0,.7,-.1,.4,.31,.06,.08,.33,.29,-.07,-.47,.63,.02,-.11,.19,.53,.24,.61,-.05,.31,.56,-.38,.14,-.11,.03,-.15,.52,.29,-.24,.34,.25,.56,.41,.37,.29,.37,.51,.22,-.74,.68,-.26,.12,.01,0,.05,.06,.69,-.07,-.01,.32,.34,-.17,.19,.3,.12,.4,.06,.32,-.03,.31,.54,.56,.14,-.17,-.51,-.25,.77,.14,.47,.26,.59,.3,-.67,.42,.42,-.61,.35,.05,.49,.24,.31,-.28,.6,-.13,-.42,.42,.37,.27,.16,-.25,-.12,-.13,.02,.3,.51,.31,.67,.13,.21,0,.24,.3,.35,0,.09,-.08,-.8,.52,.55,.56,.29,-.18,.14,0,.18,.25,.25,.51,.39,-.35,.31,.34,.18,0,-.07,.29,-.21,.22,-.28,.39,.25,.36,-.21,.32,.36,.41,.35,.17,-.08,-.04,.04,.07,-.81,.46,.42,.36,.39,.06,.05,-.22,.29,-.23,-.09,.36,.45,.16,0,.23,.1,-.15,-.57,-.08,.35,-.35,.5,.35,-.14,.53,.66,.15,0,.3,.04,-.21,.36,-.65,-.77,-.13,-.17,-.01,.07,.15,.72,.02,-.49,-.21,.26,.16,.13,-.4,-.27,.38,-.05,.35,-.56,.24,.27,-.21,.07,.43,-.1,-.47,.14,.42,.52,.41,.21,.67,-.12,.35,.34,.34,.7,.3,-.29,.03,.47,.32,.56,.54,.88,-.07,-.55,-.7,.18,.48,-.26,.3,-.42,.35,.5,-.09,.64,-.2,.17,-.45,.57,.17,.17,.48,-.17,.59,-.07,.04,.12,.36,-.53,.34,.48,-.39,-.57,.04,.29,-.02,-.06,.28,.13,-.09,.29,-.22,.41,-.17,-.03,.16,.25,.41,-.03,.16,-.47,-.15,.32,.25,-.7,.66,.28,-.14,.5,-.43,.47,-.51,-.6,.64,-.16,-.05,-.59,.15,-.12,-.04,.23,.67,.54,.41,-.36,.58,.31,-.36,-.21,.26,.51,-.41,.19,.32,.31,0,.18,.02,.66,.54,.62,.1,.29,-.17,.31,-.73,.39,.05,.47,.1,.22,.71,-.07,.57,.29,.4,-.23,-.33,.67,.42,-.05,-.2,-.07,.38,.33,.18,-.25,-.02,-.05,.1,.2,-.03,.67,.05,.48,.19,-.78,-.34,.22,.52,.38,.2,.46,.36,-.07,.53,-.23,-.13,.15,.55,.37,.27,.28,.28,.63,.69,.31,.1,.35,.39,-.4,.76,-.1,.49,.41,-.01,-.14,.31,.33,.24,.42,.32,.35,0,-.11,.35,-.02,.08,-.34,.43,.05,.46,.18,.35,.19,.23,-.1,.29,.03,.48,.2,.15,.22,-.39,-.09,-.51,.19,-.23,-.42,.19,-.09,-.02,.36,.72,.43,.39,.39,-.64,.43,.45,.32,.41,.16,.13,.5,.62,.4,.64,.35,-.11,.54,-.04,0,.1,-.04,.1,-.02,.17,.17,.11,-.24,-.04,.2,-.08,.13,-.27,.64,.37,-.67,.2,.04,.54,.1,.26,-.03,.4,.29,.24,.67,.03,.31,.52,.09,.16,-.05,.51,-.19,.21,.33,.01,.7,.17,.36,.09,-.02,.23,.29,-.76,-.04,.06,.66,.09,-.08,-.16,.33,.53,.46,.26,.35,-.01,-.16,-.29,.1,.55,.23,-.75,.05,.08,.01,.77,.28,-.43,.09,.32,-.05,.54,.51,.64,.24,-.23,.35,.19,.31,.59,.31,.2,-.63,.11,.03,.81,-.43,.13,-.19,-.77,.29,-.22,.17,.44,-.57,.22,.49,.26,.11,.4,.38,.13,-.52,.43,-.01,.25,.04,.4,.04,.42,-.13,-.28,.78,.82,-.05,-.48,-.52,-.06,.02,.5,.29,-.09,-.16,-.13,.12,-.34,.1,-.14,-.24,.64,-.3,.43,.43,.32,-.21,.06,.36,.3,.34,.26,.08,.25,-.15,-.03,.41,.55,.21,.15,-.06,.34,-.11,.1,-.19,.67,.32,-.03,.52,.16,.36,.36,.15,.14,.4,-.04,.65,.23,.24,.4,.17,.42,.63,.34,.22,-.35,.35,.54,-.03,.07,.04,.16,-.19,.56,-.13,-.05,.32,-.27,.26,.26,.12,-.17,.22,0,.23,.01,-.27,.44,.09,-.08,.49,.6,-.12,-.08,.44,.15,.49,.3,.61,.14,.33,.14,.56,.43,-.02,-.27,.24,.09,.41,-.27,.33,.28,.64,.3,.45,.25,.2,.21,.65,-.05,-.83,.48,.6,-.61,.13,.48,.04,.36,.47,.13,.02,.13,.2,.13,.33,.3,.06,.2,.05,.02,-.01,.43,.24,.38,.05,.05,.65,.08,-.19,.46,-.45,.35,.5,-.4,.29,-.11,.18,-.54,.46,-.75,-.54,.66,.08,.17,0,.45,-.29,.19,.29,.17,-.05,.27,-.03,.54,.23,.05,.34,-.11,.13,.33,-.04,-.1,.19,.15,.34,.53,.7,.3,.4,-.33,.52,.29,.65,.21,.4,-.05,0,-.06,-.18,.84,.41,.28,-.37,.43,.29,-.26,.27,-.03,.38,.6,.29,.19,.21,.31,.05,-.2,.25,.4,.24,.15,.47,.34,-.73,-.18,.5,.3,.19,.02,.06,.32,-.09,.05,.64,.48,-.18,-.48,-.18,.06,.06,-.11,.68,-.03,-.04,.68,.41,.46,.2,.11,.39,.48,.64,.39,.46,.37,.43,-.14,.05,.12,.24,.58,.52,-.06,-.36,-.28,.12,.32,.2,.28,-.11,-.01,.07,.3,-.03,-.25,.13,.19,-.08,.36,.41,-.2,-.03,.71,.47,.44,.33,.46,.7,.22,-.12,.58,-.03,.37,-.18,.63,.06,-.07,.34,.17,-.18,-.11,.73,-.44,.16,.56,.41,.28,.2,.21,.08,.26,-.23,.49,-.04,-.16,.19,-.05,.55,.01,.01,.27,-.21,-.21,.06,-.04,.39,.43,.71,.34,.28,.16,-.02,.82,.09,.69,-.21,.23,.35,.18,.31,-.06,-.1,-.06,.13,-.13,.09,.06,.14,.32,.24,.2,.43,-.38,-.11,-.06,.29,.14,-.46,.59,.46,.34,.06,.06,.2,.69,-.25,-.05,-.7,.5,.04,.59,.31,.62,-.07,.3,.16,.05,.28,.32,.19,.62,-.04,-.01,.59,.21,.49,.33,.22,.2,.49,.08,-.02,.13,.31,-.08,.46,.37,.71,-.19,.54,.24,.3,.43,.02,.2,-.12,-.14,.66,-.03,.02,.36,.03,.48,-.16,.61,.69,.44,.32,-.27,.2,.46,.08,.05,-.6,.36,.37,.4,.01,.59,-.04,.58,.32,.74,.37,.42,.65,.44,.64,.55,-.03,.17,.41,.34,.02,.31,-.14,.47,.48,.12,.66,.34,.01,.42,.34,.12,-.2,.42,.27,.35,.61,.29,.54,-.23,.06,.4,.38,.06,.36,.24,.46,.5,-.51,.65,-.17,.3,.12,.53,.31,.59,.64,.59,.05,.42,.28,.48,-.47,-.39,.54,-.05,.44,.11,.6,.08,.08,-.25,.32,.12,.41,.18,.37,-.16,-.33,.19,.37,.57,.37,-.05,-.23,.38,.32,.74,.5,.42,.49,.16,.42,-.19,.68,-.27,.25,.03,.03,-.11,.03,.23,.05,.26,.23,.61,.05,.5,.56,.3,.45,.33,.32,.35,-.07,.37,.62,.13,.14,-.06,.34,.58,.39,.36,.35,.36,-.15,.52,.68,.47,.32,-.01,.33,.32,.55,.43,.43,.16,.56,.65,.47,-.03,.61,-.19,.18,.42,-.24,.52,-.24,.36,.55,.05,.39,-.25,.48,-.1,.58,.13,.02,.55,.28,-.16,.38,.24,-.1,-.01,.44,.38,-.2,.54,.44,-.16,-.04,.34,.17,.25,-.08,.12,.26,.28,0,-.31,-.13,.58,.49,.36,.33,.35,.05,-.23,.19,.52,-.46,.13,-.47,.45,.44,.47,-.1,-.33,-.07,-.05,.24,.33,.34,.69,.48,.2,.46,.63,.38,.19,.12,.01,.08,.52,-.06,.24,.27,.3,.35,-.05,.52,.17,.43,-.7,.03,-.15,-.05,-.15,-.03,.32,-.53,-.25,.34,-.21,-.02,-.05,.11,.45,.47,-.03,.23,.24,-.07,.33,.04,-.76,-.61,-.19,.45,.29,.4,.28,-.21,.2,.37,.35,.62,.45,.24,.49,.32,.25,.78,.57,.48,-.22,.5,.29,.56,.6,-.58,-.52,.16,.3,.12,.73,.14,.26,.24,.6,.29,.22,.17,.55,-.03,.48,-.01,-.26,.49,.58,.01,.41,.3,.22,.53,.28,.6,.3,.54,.32,.14,.22,.1,.14,.2,.19,.12,.3,.32,.17,.38,-.13,.19,-.06,.5,-.53,-.01,-.26,-.1,.24,-.09,.6,.09,.64,.23,.44,.11,.23,-.01,-.04,.37,-.06,.57,.45,.66,.11,.11,.28,.06,.25,-.12,.28,.36,.65,.7,-.01,.01,.09,.58,.07,-.11,-.22,-.06,.45,.4,.57,.38,-.1,-.42,.48,.65,.39,.25,-.11,-.05,.26,.3,.14,.23,.42,-.01,.61,.05,.48,.33,-.63,.46,.38,.74,.36,.02,-.44,.41,-.15,.08,-.04,.33,-.15,-.19,.33,.63,-.07,.52,.21,.09,.02,.44,-.36,-.08,.61,-.08,.18,-.07,0,.31,.06,-.02,.68,.32,.23,.39,.31,-.21,.22,.16,.29,.31,.33,.13,.25,.51,.33,.51,-.17,.12,-.13,.13,.32,.38,.14,.14,-.4,.06,.17,-.34,.39,.2,.07,-.48,0,-.39,.08,.39,.32,.25,.37,.76,-.06,.55,0,-.37,.02,-.31,-.1,.22,.15,.37,-.09,-.39,.41,.06,-.01,.48,.63,.32,.43,.1,.34,-.34,.35,.57,.35,.13,.5,.37,.49,.31,.4,.24,.31,.28,.27,.26,.32,.06,-.08,.27,-.19,.64,-.21,.23,.29,.26,.25,.31,.11,.63,-.05,.29,-.38,.21,.21,.26,.03,.02,.57,.21,.31,.47,-.34,-.03,-.56,.58,.39,.29,.44,.31,.36,.07,-.66,.09,-.41,-.15,.24,-.01,-.43,.13,.29,.26,-.01,.59];export{a as rvalData};
