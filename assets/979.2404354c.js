const a=[-.01,-.04,.08,.02,.07,.21,.2,.64,.25,.22,-.03,-.1,-.01,-.21,-.14,.08,-.1,-.02,-.14,.14,-.15,-.7,.25,-.34,.08,.21,-.83,.05,.02,-.86,.47,-.64,.22,.2,-.17,.12,-.03,-.17,.22,.04,-.01,.17,.1,-.03,.19,-.16,-.13,-.15,-.56,.68,.2,-.06,-.18,.08,.67,.01,.12,.37,-.01,.24,.7,.27,.34,.05,-.19,-.8,.25,-.31,-.08,-.01,-.02,0,.85,-.3,.07,-.12,-.28,.72,-.03,-.52,-.16,.19,.02,.19,-.14,-.58,.18,.05,-.2,.04,.46,.06,.6,-.01,-.18,.29,-.16,-.26,.01,.75,-.02,.3,.5,.05,.62,.01,-.31,-.33,.19,.47,.01,.76,.14,-.11,-.21,-.08,-.01,-.72,-.15,.24,.07,-.36,.15,.03,.18,.56,.1,-.02,-.63,.01,.66,.12,.03,.74,-.21,-.17,.69,.42,-.79,-.02,.34,.07,.4,.18,.1,.08,.01,.12,.41,.04,.3,.57,.05,.1,.63,.44,-.21,-.13,-.12,-.17,.57,.45,.12,.63,.61,.79,.23,-.78,.33,.27,.08,-.57,.65,.47,.35,-.67,.1,-.81,.88,.15,-.1,.08,.15,-.18,.65,.22,-.12,.03,.61,-.03,-.01,.75,-.05,.6,.6,.09,.51,.07,-.16,-.46,.02,.51,.06,-.05,-.07,.49,.11,.74,.78,.05,.68,-.19,-.15,-.04,.32,.55,.07,.62,-.71,-.48,.34,.54,.28,.1,.41,.04,.77,-.71,.39,.34,.04,.03,-.15,.03,-.12,.08,-.2,-.26,.24,.07,.8,-.27,.6,.72,.61,.49,-.09,.28,-.15,-.07,.54,-.31,.69,.35,.28,-.06,.09,.42,.23,-.17,-.14,.29,.51,.32,.31,.61,-.34,.2,.15,.18,-.43,-.01,.08,.1,.16,-.02,-.8,.8,.27,-.54,.81,-.59,.01,-.05,.53,.35,-.54,-.01,.42,-.55,.46,.74,.22,.47,.46,.12,.07,-.27,.24,.48,.24,-.03,-.6,-.03,.1,.19,-.11,.64,.46,-.03,.29,-.02,-.04,.08,.05,.48,.37,.42,.09,.36,.26,-.07,-.27,.27,.47,.54,.16,-.06,.1,.53,-.18,.35,.22,-.04,-.72,-.21,-.72,.42,.19,-.35,.78,.08,-.02,-.08,-.07,.13,.07,.76,.12,.58,.53,.59,.1,.53,-.16,0,.37,-.24,.27,-.09,.14,.13,.46,-.34,-.02,-.01,.12,.04,.53,-.05,-.64,-.14,.18,.31,.61,.48,-.09,.18,.02,.54,-.06,.05,.03,.04,-.06,.32,-.27,-.09,.24,.23,.26,.03,.08,.33,.27,-.02,-.61,-.05,.01,.15,-.22,.31,.21,.32,.6,-.06,-.23,.31,.43,.28,.08,-.12,.22,.27,.23,-.02,.31,-.14,.81,-.03,.17,.03,-.5,.03,.07,.01,.06,-.06,.56,.4,.59,.28,.23,.13,.65,-.02,.03,.21,.07,.5,.41,.27,.39,-.06,.47,.4,-.02,.25,.16,-.48,.41,.67,-.3,.21,.05,.2,-.66,.04,.42,.49,.1,.34,-.13,.8,.08,.09,-.01,.06,-.34,.07,-.34,-.01,.1,-.16,.65,.21,.32,.44,.09,-.68,.47,-.12,.12,.56,.5,.26,.51,.34,-.02,-.02,-.1,-.08,-.03,.21,.17,.08,.43,-.16,.34,.66,.55,.07,.3,.05,.27,.14,.1,.27,-.03,.72,.41,.33,.3,.38,.46,-.38,.48,.57,.77,.12,-.33,.07,.11,.07,.36,.02,.09,.05,.12,.35,.76,.42,.11,.58,.08,.26,.43,.07,.29,-.08,-.09,.41,-.11,-.74,-.35,0,.33,-.74,.17,-.06,-.63,.04,.12,0,.42,-.13,-.37,.44,-.19,.07,.11,-.55,.31,.62,.03,-.03,.06,-.14,.56,-.01,.22,.03,.14,.17,.15,-.01,-.08,-.34,.68,-.07,-.4,.01,.47,.23,.68,-.23,.02,.41,-.47,-.07,0,-.02,-.07,.29,.62,-.19,.36,-.01,.4,.43,.3,.09,.04,.52,.02,-.84,.59,-.23,0,-.1,-.01,-.1,.18,.73,.02,.02,.01,.5,-.27,0,.39,.27,.38,.08,.47,-.17,.25,.36,.36,.46,-.08,-.21,-.17,.76,.17,.51,.19,.71,.43,-.64,.29,.29,-.57,-.02,-.12,.28,.36,.25,-.07,.68,-.21,-.33,.53,.05,.21,.15,-.28,-.19,-.01,.08,-.02,.12,.1,.41,-.02,.07,-.14,.36,.35,.18,.28,-.08,-.1,-.85,.45,.52,.53,.06,-.11,.12,.04,.18,.1,.19,.49,.26,-.22,.23,.26,.49,.02,-.03,.2,-.03,.13,.06,.09,.2,.17,-.15,.21,.57,.54,.09,.14,-.22,-.11,-.17,.06,-.84,.35,.63,.35,.48,.1,-.06,.16,.15,-.21,-.04,.53,.26,-.05,.05,.16,-.11,-.1,-.58,-.16,.13,-.31,.52,.21,-.14,.63,.7,-.07,.03,-.1,.07,-.11,.22,-.52,-.81,-.01,-.02,.25,-.08,.28,.68,-.11,-.34,-.22,.29,.08,.18,-.16,-.61,.2,-.18,-.05,-.79,.14,.17,-.51,-.15,.25,0,-.37,.13,.45,.56,.14,.07,.64,-.22,.46,.59,.08,.49,.11,-.26,-.04,.27,.04,.42,.68,.75,-.03,-.52,-.65,.36,.37,-.33,.17,-.73,.04,.4,-.01,.58,.14,.11,-.28,.32,-.01,.36,.41,-.17,.37,-.15,-.01,.01,.24,-.42,.36,.7,-.13,-.63,-.11,.07,-.22,.09,.63,.09,.05,.04,-.18,.32,-.22,-.11,.13,.05,.44,-.03,.06,-.35,-.27,.42,.08,-.69,.38,.19,.11,.75,-.42,.21,-.34,-.63,.75,-.14,.09,-.78,.38,-.01,-.06,.14,.4,.39,.65,-.36,.55,.09,-.09,-.19,.22,.41,-.43,.07,.47,.57,.21,.08,-.02,.63,.51,.39,-.12,.4,-.15,.15,-.81,.26,.13,.29,-.07,.27,.64,.15,.31,.45,.28,.03,-.17,.62,.16,-.02,-.2,-.04,.15,.17,.3,-.14,-.05,-.07,-.02,.21,-.06,.72,-.07,.7,.1,-.81,-.41,.31,.29,.41,.11,.53,.63,.05,.53,-.27,-.01,.04,.3,.07,.14,.01,.16,.35,.76,-.01,-.06,.15,.22,-.13,.81,-.01,.33,.19,-.28,.04,.31,.26,.35,.08,.59,.16,.03,-.2,.58,.12,.23,-.11,.56,-.05,.26,.07,.17,.29,.16,0,.39,.14,.38,.05,.17,.43,-.2,-.04,-.42,.2,-.35,-.18,.17,.05,.21,.38,1,.33,.13,.6,-.7,.64,.54,.57,.44,0,-.05,.4,.61,.61,.73,.52,-.04,.73,-.12,.1,.14,-.04,-.01,.01,.03,.14,-.02,-.43,-.21,.01,-.14,0,-.23,.61,.5,-.56,.39,.02,.47,.22,.24,-.16,.23,.05,.14,.63,-.09,.38,.41,.09,-.01,-.2,.6,-.02,.07,.46,.06,.71,-.02,.64,-.06,.02,.45,0,-.61,-.04,.02,.65,-.02,-.05,-.24,.07,.58,.34,.14,.46,.02,-.05,-.22,.2,.49,.16,-.56,-.11,.33,.02,.7,.44,-.77,.21,.01,-.05,.6,.52,.48,.03,-.07,.35,-.05,.5,.35,.11,.07,-.5,-.01,.02,.74,-.43,.1,-.09,-.67,.29,-.14,.17,.11,-.47,-.02,.41,.63,.26,.23,.16,.43,-.37,.57,.18,.09,.3,.09,.09,.29,.02,-.16,.77,.8,-.13,-.37,-.43,0,.02,.58,.15,-.14,-.27,-.25,-.04,-.16,.04,-.1,-.26,.38,-.24,.59,.21,.03,-.08,.03,.06,.26,.48,.12,.27,.14,-.25,.09,.4,.33,.08,.06,-.32,.14,.06,.08,-.03,.6,.18,.06,.58,.06,.58,.14,.03,.24,.49,-.08,.77,.19,.29,.09,.13,.33,.56,.49,-.06,-.37,.48,.57,-.11,-.14,.04,.24,-.07,.71,-.13,-.1,.36,-.13,.09,0,-.09,-.28,0,-.14,.45,.23,-.05,.21,-.06,.01,.32,.39,-.25,-.37,.4,.03,.25,.4,.46,.34,.01,-.05,.76,.13,-.25,-.09,.39,.05,.5,-.09,.23,.02,.53,.22,.31,.3,.09,.09,.41,.03,-.72,.36,.33,-.82,.25,.39,-.02,.05,.33,.13,-.02,-.05,.08,-.08,.14,.12,-.1,.08,.03,-.17,.03,.32,.08,.34,.08,.08,.39,-.02,.09,.46,-.39,.58,.38,-.23,.03,.17,.44,-.48,.34,-.82,-.76,.64,-.1,.05,-.1,.4,-.33,.28,.52,.03,-.2,.52,-.03,.5,.21,.11,.54,.09,-.01,.01,-.22,-.09,.05,.14,.2,.36,.62,.29,.69,-.1,.31,.35,.59,.15,.39,.15,.11,-.14,-.32,.76,.5,.07,-.28,.47,.03,0,.34,.09,.04,.52,.36,-.04,.09,.4,.25,-.14,.16,.48,.44,-.1,.27,.14,-.66,-.25,.23,.41,.34,-.12,.02,.57,-.06,.01,.51,.44,.1,-.19,-.2,.27,.27,-.23,.64,-.1,-.07,.84,.55,.32,.28,.28,.48,.63,.74,.35,.65,.36,.34,.06,.19,.22,.35,.41,.7,.16,-.27,-.08,.25,.51,-.04,.49,.04,.18,.27,.25,.2,-.24,.33,.36,-.2,.51,.25,-.01,-.01,.68,.31,.29,.38,.49,.75,0,-.17,.74,-.01,.1,-.14,.69,-.09,-.39,.05,.18,-.29,.12,.77,-.5,.09,.41,.21,.23,.3,.17,-.11,.28,-.43,.21,-.08,-.21,.13,-.01,.6,.02,-.04,.13,-.11,-.21,.03,.01,.33,.32,.47,.25,.2,.13,-.09,.71,.04,.49,-.22,.51,.17,.03,.48,-.06,-.24,.02,.21,-.05,.26,-.15,.24,.13,.21,.22,.54,-.35,.06,-.15,.4,.03,-.55,.59,.29,.22,.09,.02,.23,.77,-.23,.17,-.65,.36,.02,.52,.36,.63,-.05,.46,.28,.03,.3,.46,.14,.67,.12,.07,.62,.45,.32,.52,.4,.01,.26,-.03,.08,.13,.24,.01,.47,.14,.68,-.25,.66,.05,.48,.26,.03,.19,-.09,-.3,.79,.07,-.01,.26,.09,.36,-.07,.43,.47,.62,.33,-.21,.12,.31,.03,.03,-.72,.29,.32,.64,.33,.47,-.05,.41,.24,.72,.05,.3,.76,.19,.5,.38,.27,.32,.54,.32,-.3,.37,.16,.48,.3,-.01,.42,.36,-.25,.36,.41,.06,-.29,.19,.38,.33,.76,.3,.5,-.34,-.02,.22,.12,.25,.36,.09,.3,.69,-.69,.66,-.26,.52,.11,.29,.22,.54,.7,.76,-.27,.19,.17,.29,-.38,-.39,.69,.23,.65,-.21,.77,.06,.03,-.11,.29,0,.6,.04,.09,-.13,-.29,.01,.58,.71,.08,.02,.13,.46,.41,.69,.5,.57,.45,.07,.37,-.1,.63,-.03,.45,-.06,.02,-.01,.27,-.05,.16,.18,.1,.7,-.05,.63,.35,.36,.43,.37,.25,.31,.1,.48,.75,.1,.01,-.02,.28,.49,.34,.1,.18,.29,-.2,.52,.76,.46,.54,-.03,.05,-.01,.41,.25,.51,-.08,.75,.61,.68,-.01,.64,-.03,.43,.48,-.16,.35,-.05,.05,.54,-.03,.32,-.19,.62,-.09,.62,.06,-.08,.56,.64,-.19,.48,.34,-.2,.12,.28,.14,-.26,.56,.4,-.29,-.07,.31,.19,.01,-.2,.22,.2,.23,-.05,-.27,-.02,.56,.43,.56,.03,.04,-.32,-.08,.02,.35,-.62,.37,-.54,.24,.29,.43,-.09,-.18,-.06,-.16,.24,.47,.03,.47,.31,.48,.63,.77,.26,.1,.26,.01,.05,.3,-.23,-.05,.18,.15,.12,-.1,.47,.12,.38,-.86,-.08,-.1,.14,-.03,0,.52,-.31,-.25,.36,-.13,.16,.01,-.14,.44,.46,.01,.06,-.03,.12,.03,.37,-.89,-.57,-.09,.24,0,.13,.06,-.14,.2,.21,.35,.74,.33,.16,.36,.13,.18,.79,.7,.39,-.14,.44,.18,.28,.37,-.72,-.34,.08,.19,.23,.69,-.03,.38,-.02,.43,.07,-.04,-.06,.28,.12,.34,.05,-.21,.27,.5,.05,.43,.17,.01,.5,.41,.44,.07,.5,.06,-.03,.07,.07,.11,.09,.13,0,.43,.43,.33,.22,-.08,.07,.15,.6,-.25,-.25,-.11,-.05,.06,-.02,.57,.1,.45,0,.31,.3,.42,-.09,-.12,.34,.1,.72,.47,.6,.18,.3,.11,-.01,.2,-.24,.05,.54,.65,.78,.11,.07,.2,.3,-.03,.07,-.08,-.01,.4,.39,.28,.15,-.17,-.57,.38,.75,.2,.11,-.03,.08,.21,0,.18,.16,.21,0,.37,-.06,.19,.18,-.79,.64,.59,.82,.41,.15,-.33,.16,-.06,.05,-.11,.05,.09,-.07,.14,.66,0,.48,.01,-.11,-.07,.31,-.43,-.15,.42,.01,.1,-.08,-.05,.35,-.05,-.15,.45,.22,-.01,.08,.06,-.44,-.02,-.1,.07,.27,.19,.23,.3,.5,.18,.46,-.26,.1,-.09,-.06,.15,.26,.46,-.01,-.23,.05,-.09,-.35,.64,.07,.15,-.57,-.08,-.37,.01,.29,0,.13,.06,.68,-.16,.7,0,-.53,.21,-.09,-.29,.28,0,.38,.08,-.26,.49,-.12,-.07,.19,.4,.14,.38,.13,.38,-.29,.2,.3,.05,-.1,.42,.2,.27,.12,.6,.28,.02,.2,.25,.03,.16,-.17,-.39,.03,-.36,.5,-.23,.07,.14,.08,.06,.12,.43,.38,-.14,.36,-.29,.04,.1,-.03,.2,0,.38,.15,.12,.29,-.39,.05,-.68,.7,.07,.44,.22,.19,.31,.13,-.83,-.05,-.39,-.27,.06,.29,-.23,.23,.08,.15,.05,.62];export{a as rvalData};
