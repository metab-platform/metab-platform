const a=[-.03,.01,.23,.03,.25,.28,.3,.56,.32,.19,.07,-.04,0,-.35,-.01,.04,.03,-.01,-.17,.16,-.18,-.72,.23,-.19,.23,.39,-.83,.17,.13,-.81,.6,-.63,.32,.18,-.12,.17,.11,-.03,.29,.08,-.08,.33,.24,-.02,.09,-.1,-.11,-.06,-.49,.64,.21,-.08,-.2,.28,.72,.11,.18,.37,.01,.36,.76,.34,.51,-.04,-.13,-.75,.44,-.18,-.07,-.02,-.06,.04,1,-.23,.26,-.04,-.22,.77,.08,-.35,-.19,.37,.05,.37,-.1,-.61,.39,.04,-.31,.12,.54,.07,.65,-.22,-.02,.24,-.27,-.27,-.02,.84,-.06,.49,.58,.02,.69,.01,-.33,-.29,.36,.55,.06,.69,.14,-.2,-.14,.08,.12,-.74,-.14,.38,-.07,-.34,.19,.05,.04,.61,.29,.01,-.58,.15,.6,.07,.05,.65,-.12,-.14,.62,.4,-.73,.01,.49,.1,.56,.39,.12,.03,.01,.21,.61,-.1,.5,.59,-.01,.1,.59,.49,-.21,-.06,-.2,-.06,.44,.55,.01,.63,.67,.79,.23,-.71,.37,.42,.11,-.46,.59,.33,.4,-.6,.17,-.8,.84,.3,-.11,.09,.11,-.11,.69,.27,-.1,.1,.55,-.02,.11,.77,.01,.74,.71,.22,.65,.23,-.14,-.53,.11,.67,.2,.01,-.12,.61,-.02,.72,.83,.03,.62,-.05,-.06,.12,.33,.56,.02,.62,-.68,-.59,.49,.62,.44,.3,.5,.19,.7,-.68,.45,.23,-.01,.04,.03,.16,-.14,.12,-.08,-.24,.24,.04,.74,-.1,.59,.64,.64,.44,0,.22,-.15,-.07,.48,-.35,.72,.34,.46,-.11,.05,.5,.19,-.08,-.13,.36,.64,.47,.38,.66,-.3,.37,.13,.26,-.38,-.05,.22,.19,.27,-.03,-.73,.79,.41,-.49,.75,-.65,.12,-.16,.56,.41,-.6,.14,.42,-.54,.42,.68,.39,.4,.53,.29,.1,-.22,.28,.5,.17,.11,-.52,-.1,.11,.25,-.1,.7,.52,-.03,.45,.01,-.06,.1,.13,.5,.37,.48,.2,.28,.44,-.06,-.16,.47,.36,.58,.32,-.09,.03,.56,-.32,.46,.25,-.05,-.73,-.2,-.65,.49,.08,-.43,.85,.22,-.09,-.14,.1,.27,.09,.81,.22,.55,.67,.45,.14,.58,-.26,.15,.35,-.23,.41,.02,.2,.09,.52,-.33,.03,-.12,.08,.21,.65,.01,-.54,-.16,.24,.38,.67,.52,-.05,.37,-.14,.62,-.12,.06,.02,.02,-.01,.25,-.23,-.09,.35,.33,.37,-.04,.08,.19,.15,.14,-.68,-.07,-.02,-.01,-.19,.38,.33,.37,.58,.05,-.09,.41,.59,.44,.2,-.17,.15,.4,.33,-.05,.48,0,.76,-.13,.17,.16,-.5,-.01,.17,.15,.16,-.07,.52,.26,.55,.35,.38,.19,.64,.15,0,.35,.26,.59,.55,.44,.53,-.07,.4,.55,.1,.4,.11,-.53,.53,.67,-.43,.25,-.05,.22,-.63,.19,.46,.48,.28,.47,-.24,.79,.04,.16,-.1,.02,-.36,.25,-.31,.15,.21,-.14,.7,.36,.42,.46,.22,-.75,.61,.05,.26,.64,.43,.26,.5,.2,.08,.11,-.05,-.04,-.02,.08,.31,.24,.31,-.13,.4,.62,.58,.01,.41,.18,.43,.11,.23,.42,.1,.8,.59,.28,.45,.41,.43,-.38,.43,.6,.77,.32,-.31,.24,.25,.09,.51,.01,.06,.02,.09,.49,.77,.3,.06,.44,.13,.34,.55,.19,.31,-.04,-.06,.5,-.14,-.67,-.27,-.07,.32,-.67,.29,0,-.66,.2,.24,.07,.43,-.16,-.4,.35,-.14,.05,.2,-.55,.25,.52,0,-.08,-.01,-.12,.49,-.14,.26,.17,.17,.01,.29,.14,-.04,-.43,.58,.03,-.32,.09,.59,.34,.74,-.04,.16,.55,-.47,.08,-.03,.03,-.09,.41,.56,-.3,.46,.12,.5,.42,.38,.26,.2,.51,.04,-.85,.58,-.15,.01,-.09,.07,.03,.19,.76,-.03,.01,.17,.45,-.18,.08,.41,.17,.43,.1,.47,-.14,.27,.47,.54,.36,-.06,-.35,-.18,.77,.25,.51,.34,.62,.37,-.6,.39,.48,-.63,.09,.03,.47,.37,.43,-.08,.72,-.15,-.46,.52,.24,.36,.21,-.19,-.2,-.04,.04,.12,.29,.24,.47,.12,.15,-.09,.45,.52,.38,.34,.04,-.15,-.84,.53,.41,.65,.27,-.12,.16,-.03,.24,.13,.28,.54,.27,-.29,.39,.42,.41,-.05,-.04,.29,-.06,.1,.06,.17,.26,.29,-.18,.41,.58,.63,.17,.18,-.22,-.13,0,.08,-.82,.53,.49,.29,.45,.08,.04,.14,.19,-.2,.01,.56,.42,.09,.01,.28,0,-.13,-.57,-.16,.26,-.33,.51,.33,-.21,.68,.64,.07,0,.07,.04,0,.29,-.56,-.73,-.01,-.07,.32,.04,.25,.71,-.06,-.27,-.18,.35,.21,.24,-.19,-.47,.41,-.15,.13,-.76,.32,.26,-.38,.03,.37,-.05,-.39,.18,.47,.63,.35,.11,.7,-.16,.48,.56,.23,.58,.23,-.26,-.06,.42,.16,.54,.7,.76,.07,-.55,-.63,.36,.5,-.22,.36,-.68,.21,.53,-.1,.66,.13,.13,-.39,.47,.14,.46,.53,-.29,.43,-.1,-.06,.05,.33,-.37,.42,.64,-.27,-.59,-.07,.21,-.17,.18,.53,.2,.02,.21,-.13,.43,-.27,-.07,.21,.2,.5,-.02,.02,-.34,-.25,.43,.18,-.71,.55,.35,.09,.69,-.44,.39,-.29,-.67,.81,-.16,.04,-.7,.44,-.08,-.13,.25,.46,.43,.7,-.21,.71,.24,-.15,-.18,.3,.42,-.45,.16,.48,.48,.15,.09,0,.69,.6,.47,-.03,.49,-.14,.19,-.8,.38,.16,.45,.03,.23,.77,.21,.45,.41,.44,-.14,-.31,.63,.32,-.11,-.27,-.11,.25,.34,.35,-.2,-.03,-.04,0,.29,-.04,.68,.01,.57,.11,-.74,-.39,.17,.41,.45,.14,.49,.53,-.02,.61,-.15,-.11,.19,.44,.23,.21,.14,.25,.46,.78,.13,.07,.31,.37,-.27,.8,-.11,.51,.35,-.22,.08,.35,.39,.32,.19,.55,.27,0,-.17,.56,.08,.34,-.13,.5,.03,.42,.13,.33,.36,.34,-.02,.35,.12,.53,.08,.14,.31,-.34,-.05,-.53,.26,-.19,-.29,.33,.07,.22,.4,.85,.5,.32,.49,-.7,.61,.51,.54,.34,.1,.03,.5,.63,.52,.74,.47,-.11,.69,-.09,0,.13,0,.04,-.01,.09,.03,.1,-.35,-.17,.02,-.17,0,-.23,.64,.53,-.61,.44,-.02,.6,.16,.3,-.04,.41,.14,.18,.69,-.05,.45,.49,-.02,.09,-.17,.5,-.04,.13,.54,.11,.8,.16,.58,.04,-.02,.33,.14,-.55,-.08,.09,.69,.05,-.08,-.16,.25,.57,.45,.21,.47,.12,-.05,-.24,.11,.59,.33,-.63,-.03,.21,.17,.64,.55,-.68,.34,.18,-.1,.62,.51,.59,.1,-.05,.45,.12,.46,.49,.3,.13,-.49,-.05,-.06,.76,-.42,.14,-.13,-.71,.48,-.14,.11,.31,-.47,.06,.56,.52,.35,.42,.33,.36,-.46,.43,.21,.16,.33,.21,.12,.43,0,-.24,.81,.81,-.05,-.42,-.49,-.06,.18,.58,.31,-.07,-.12,-.25,-.01,-.2,.04,-.08,-.15,.46,-.18,.48,.39,.22,-.13,.15,.23,.43,.46,.19,.35,.31,-.23,-.05,.49,.51,.11,.26,-.29,.27,-.05,.13,0,.61,.33,.06,.64,.08,.62,.15,.05,.39,.5,-.13,.76,.35,.24,.28,.21,.46,.57,.4,.01,-.35,.53,.63,-.11,.01,-.04,.33,-.06,.65,-.15,-.1,.32,-.17,.18,.18,.05,-.29,.07,-.04,.42,.22,-.08,.35,-.01,0,.49,.53,-.2,-.29,.57,.06,.43,.46,.62,.34,.14,.01,.7,.28,-.16,-.22,.23,.09,.58,-.11,.41,.18,.55,.23,.46,.47,.12,.14,.49,.06,-.78,.47,.39,-.78,.16,.51,.04,.21,.5,.27,.02,-.03,.1,.07,.3,.24,-.06,.11,.08,-.16,.02,.45,.15,.52,.07,0,.48,.02,.03,.55,-.43,.56,.52,-.33,.15,.13,.35,-.52,.44,-.85,-.74,.7,-.02,.25,-.07,.56,-.15,.38,.46,.15,-.13,.36,-.02,.64,.25,.28,.51,.12,-.04,.17,-.04,-.06,.11,.09,.39,.48,.72,.29,.66,-.1,.45,.35,.67,.32,.58,.1,.1,-.08,-.19,.77,.47,.22,-.33,.49,.13,-.13,.29,.14,.16,.54,.5,.1,.12,.34,.3,-.23,.09,.43,.38,-.06,.43,.21,-.73,-.25,.39,.26,.32,-.09,.06,.48,-.07,.09,.62,.56,-.08,-.24,-.07,.3,.22,-.26,.72,-.09,-.07,.81,.61,.45,.43,.21,.54,.57,.74,.37,.62,.44,.45,-.03,.23,.16,.37,.55,.69,.18,-.23,-.07,.29,.51,.1,.47,0,.1,.08,.22,.1,-.19,.26,.33,-.13,.45,.32,-.06,-.03,.76,.48,.32,.47,.54,.79,.15,-.08,.7,-.01,.22,-.18,.61,-.09,-.38,.19,.34,-.14,.14,.75,-.52,.1,.49,.28,.3,.35,.11,.05,.34,-.37,.38,-.03,0,.09,-.04,.58,.03,-.04,.2,-.22,-.25,.18,-.1,.35,.5,.57,.37,.41,.11,-.05,.79,.06,.55,-.14,.37,.35,.12,.48,-.12,-.13,.06,.3,-.11,.13,-.03,.38,.31,.38,.28,.47,-.32,.02,-.13,.33,.13,-.59,.66,.46,.26,.02,.05,.3,.78,-.21,.07,-.66,.5,.01,.63,.45,.73,-.06,.49,.37,.06,.35,.42,.29,.71,.13,-.03,.69,.32,.49,.52,.31,.06,.4,.01,.08,.14,.4,-.07,.45,.33,.78,-.2,.68,.19,.47,.26,.18,.39,-.11,-.2,.75,.07,.06,.35,.1,.48,.05,.49,.56,.58,.4,-.26,.16,.41,.04,-.01,-.74,.37,.47,.6,.39,.59,-.05,.47,.32,.8,.2,.39,.73,.3,.62,.45,.35,.25,.5,.44,-.23,.48,.2,.61,.41,.02,.51,.51,-.14,.46,.41,.12,-.23,.31,.35,.45,.67,.31,.45,-.18,-.02,.33,.24,.38,.47,.13,.42,.63,-.65,.73,-.11,.35,.14,.43,.31,.62,.73,.73,-.18,.28,.28,.45,-.31,-.4,.66,.14,.57,-.03,.7,.07,.19,-.15,.46,.16,.69,.23,.21,-.14,-.24,.12,.65,.72,.21,-.05,0,.59,.48,.74,.63,.59,.6,.06,.55,-.14,.71,-.09,.35,-.06,.03,-.02,.26,.09,.17,.34,.11,.71,-.06,.53,.5,.52,.56,.54,.42,.39,.08,.43,.68,.27,.06,-.02,.45,.54,.46,.24,.24,.37,-.09,.54,.77,.61,.41,0,.18,.12,.48,.33,.32,-.03,.73,.71,.63,-.13,.74,.03,.31,.62,-.19,.47,-.11,.19,.64,.01,.43,-.18,.6,.05,.58,.08,.05,.66,.54,-.18,.4,.41,-.22,.09,.37,.27,-.13,.47,.51,-.12,.02,.48,.36,.17,-.18,.16,.28,.43,-.08,-.26,0,.53,.4,.45,.19,.19,-.21,-.07,.24,.45,-.59,.41,-.42,.37,.45,.55,-.11,-.21,-.03,-.18,.4,.4,.16,.56,.43,.35,.66,.71,.4,.12,.25,-.06,.01,.42,-.19,.08,.15,.24,.24,-.05,.54,.17,.55,-.88,-.08,-.08,.24,-.11,-.09,.49,-.4,-.26,.36,-.16,.13,-.02,-.03,.56,.56,-.05,.24,.11,.06,.16,.28,-.9,-.62,-.1,.36,.17,.32,.21,-.14,.36,.34,.5,.75,.43,.26,.54,.23,.37,.83,.74,.42,-.08,.51,.27,.46,.44,-.67,-.3,.26,.36,.31,.77,.04,.54,.11,.62,.16,.11,.1,.43,.05,.48,.02,-.3,.4,.56,.01,.39,.36,.14,.64,.53,.51,.25,.52,.2,.04,.1,.18,.14,.11,.13,.13,.27,.42,.31,.37,-.11,.2,.1,.48,-.23,-.16,-.18,-.04,.21,.01,.61,.23,.53,.09,.43,.24,.28,-.12,-.17,.52,.01,.59,.56,.68,.25,.26,.27,.12,.38,-.21,.2,.51,.72,.78,.07,.14,.13,.35,-.04,-.12,-.19,-.11,.57,.54,.48,.3,-.2,-.48,.51,.77,.31,.12,-.07,.07,.36,.15,.07,.3,.36,.09,.46,.06,.33,.32,-.77,.54,.66,.82,.57,.05,-.31,.27,0,.06,-.11,.18,-.03,.01,.31,.69,-.03,.63,.08,-.01,-.03,.49,-.45,.02,.47,-.15,.11,-.1,.06,.36,-.01,-.06,.57,.3,.14,.26,.15,-.38,.06,.04,.22,.42,.35,.18,.25,.61,.32,.5,-.21,.05,-.15,.02,.31,.46,.32,.2,-.21,.14,.03,-.29,.66,.13,.19,-.59,-.04,-.34,-.01,.42,.14,.27,.24,.69,-.16,.74,.01,-.4,.23,-.18,-.28,.36,.15,.42,-.01,-.37,.51,-.01,.03,.35,.47,.33,.54,.07,.54,-.37,.36,.45,.23,.05,.6,.23,.42,.25,.6,.28,.13,.41,.36,.18,.32,-.03,-.31,.18,-.24,.62,-.3,.24,.31,.28,.17,.3,.28,.53,-.03,.33,-.42,.21,.14,.12,.1,-.01,.54,.29,.29,.47,-.39,.06,-.62,.59,.27,.39,.41,.31,.44,.15,-.75,.1,-.46,-.24,.15,.31,-.24,.12,.24,.18,.07,.69];export{a as rvalData};
