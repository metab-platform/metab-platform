const a=[-.33,.34,.75,-.05,.7,-.06,.26,-.11,.13,.23,.18,.01,-.08,-.68,.39,-.03,.22,-.13,-.17,-.08,-.02,-.52,.14,.23,.33,.62,-.35,.16,.13,-.3,.45,-.43,.55,.15,-.07,.17,.62,.35,.37,.62,-.08,.66,.42,-.09,.15,.15,.03,-.39,-.5,.44,.22,-.09,.31,.77,.52,.32,.11,.18,.32,.48,.53,.62,.86,-.12,-.28,-.42,.71,.32,-.18,-.08,.08,.31,.41,-.31,.7,.07,-.23,.48,.66,-.39,-.44,.36,-.08,.56,-.2,-.48,.49,-.01,-.7,.58,.36,.09,.2,-.55,-.01,-.07,-.64,-.2,-.28,.49,-.08,.85,.62,-.14,.69,.06,-.06,.02,.5,.73,.11,.44,.18,-.58,-.31,.54,.14,-.54,-.56,.35,.02,-.3,.2,-.23,-.13,.6,.67,-.44,-.34,.6,-.04,-.36,-.05,.43,.16,-.25,.2,.33,-.38,-.1,.71,.06,.58,.5,-.02,-.06,.08,-.22,.68,-.19,.84,.1,.06,.01,-.07,.19,-.23,-.05,-.14,.36,.05,.74,-.03,.3,.19,.41,.35,-.49,.04,.55,-.06,-.5,-.03,-.28,.38,-.5,-.01,-.27,.37,.62,-.05,-.01,.09,.66,.58,.02,.07,.14,.19,-.24,-.1,.18,.03,.6,.73,.69,.73,.49,-.04,-.49,.36,.51,.62,-.02,-.51,.54,-.09,.42,.45,-.05,-.05,.33,-.09,.5,.17,.25,.17,0,-.48,-.33,.52,.54,.55,.74,.38,.64,.05,-.44,.37,.13,.08,-.13,.34,.81,.16,0,.26,.05,.14,0,.41,.38,-.16,-.06,.06,-.13,.17,.21,.01,-.04,.21,-.47,.52,-.11,.69,-.08,.13,.4,.26,.7,.16,.2,.49,.71,-.15,.65,-.33,.56,-.04,.42,-.17,-.22,.6,.87,.58,.04,-.2,.4,.81,-.52,.3,-.31,.41,-.47,.31,.45,-.21,.49,.4,-.39,-.17,.4,.52,-.1,.12,.44,.03,-.23,.18,.49,-.02,.62,-.33,.01,.19,.14,-.15,.77,.14,.06,.53,-.02,-.14,-.06,.12,.49,.53,.29,.86,.55,.58,-.1,.35,.74,.23,.32,.55,-.18,-.15,.35,-.67,.43,.02,.07,-.46,.04,-.47,.4,-.37,-.38,.5,.43,-.1,-.13,.67,.81,.23,.34,.4,.16,.77,-.06,.08,.3,-.36,.45,.33,-.08,.89,.71,.26,.16,.21,-.06,-.08,-.51,.07,.66,.38,.1,-.3,-.16,.2,-.1,.37,.24,.01,.56,-.05,.36,-.04,.05,-.02,.13,.02,.19,-.11,.04,.66,.62,.89,-.01,.11,-.05,-.13,.66,-.61,-.03,-.16,-.09,-.2,.01,.86,.34,.27,.11,.34,.82,.74,.53,.86,-.59,-.31,.91,.13,.04,.71,.41,.3,-.56,.04,.59,-.46,.1,.03,.63,.57,.08,.22,-.24,-.17,-.13,.31,.08,.31,.79,-.22,.61,.69,.64,.74,.51,.56,-.19,.6,.44,.62,.54,-.11,-.58,.32,.54,-.7,-.03,-.08,-.16,-.48,.67,.04,.36,.86,.63,-.62,.42,-.03,.06,-.24,-.21,-.51,.78,.08,.63,.39,0,.32,.51,.61,.24,.69,-.4,.73,.54,.61,.21,.59,.03,.43,-.3,-.01,.8,.12,0,-.13,-.18,.71,.56,.33,-.07,.44,-.07,.26,-.06,.79,.47,.71,-.17,-.12,.56,.53,.48,.76,.01,.63,-.06,.59,-.54,.18,.23,.4,.56,-.2,.71,-.03,-.01,.43,-.07,.16,.33,.18,.48,.29,.31,-.05,.08,-.05,.15,.37,.12,-.33,.06,.1,.37,-.09,-.17,-.48,-.28,-.02,-.15,.91,-.01,-.19,.64,.78,.8,.51,-.05,-.49,-.21,-.3,-.12,.82,-.41,.03,-.09,-.03,.01,.05,0,.23,-.16,.79,.82,.2,-.27,.58,.72,-.14,-.59,.39,.09,-.5,.11,.71,.12,.73,.38,.64,.71,-.52,.6,-.05,.14,.17,.85,-.11,-.53,.56,.74,.34,.11,.41,.74,.7,.34,.41,-.34,.17,-.5,.12,-.03,.1,.5,.17,.19,.01,0,.66,-.13,-.05,-.04,.08,-.23,.28,0,.08,-.2,.14,.18,.72,-.2,.01,-.55,-.36,.45,.27,.64,.51,.13,-.06,-.38,.23,.52,-.62,.12,.32,.68,-.33,.67,.04,.72,-.14,-.7,.02,.7,.51,.12,.45,-.16,-.21,-.01,.63,.47,.63,.32,.24,.16,.13,.09,.44,.54,.42,-.11,-.06,-.31,.54,-.06,.75,.73,-.49,.05,-.01,-.28,.35,.59,.02,.2,-.47,.64,.61,-.23,-.03,-.38,-.1,-.11,.04,-.17,.29,.17,.84,-.57,.56,-.05,.32,.57,.03,-.08,-.15,.37,-.06,-.33,.68,-.11,.27,.11,0,-.12,-.11,.08,-.15,-.16,-.04,.68,.6,-.03,.43,.27,-.32,-.52,-.25,.75,-.59,.33,.63,.06,.45,.19,.57,-.15,.14,.05,.19,.44,-.52,-.24,0,-.39,.29,.56,.03,.48,-.14,-.34,-.21,.02,.67,.13,-.2,.05,.42,.03,.36,-.44,.51,.48,.08,.69,.74,-.07,-.32,-.03,-.18,.1,.65,0,.34,-.33,.43,-.1,.62,.44,.7,-.26,-.02,.66,.81,.73,.44,.39,-.12,-.33,-.68,-.07,.72,.35,.6,-.42,.77,.55,-.43,.57,-.16,.31,-.46,.81,.49,.37,.24,-.44,.32,-.03,-.01,-.15,.63,-.62,.52,-.02,-.53,-.54,.02,.56,.02,-.03,-.11,.53,.02,.66,-.15,.3,-.22,.02,-.11,.61,.21,-.14,-.01,-.19,.06,.26,.24,-.53,.55,.48,-.11,-.06,-.27,.87,.1,-.49,.46,-.06,-.2,-.46,.37,-.16,-.08,.19,.28,.28,.18,-.36,.62,.72,-.24,-.33,-.2,.01,-.39,0,-.14,-.17,-.42,-.02,.03,.34,-.02,.33,.1,.17,-.17,.05,-.31,.54,-.12,.78,.57,.08,.26,.07,.68,-.15,.75,-.42,-.48,.54,.58,.07,-.36,-.14,.63,.6,.19,-.18,0,-.07,-.09,.4,-.01,.24,-.04,.16,-.01,-.25,-.42,-.2,.87,-.02,.03,.04,-.17,-.09,-.05,-.17,-.33,.44,.69,.73,.08,.7,.59,.34,.19,.75,.46,.64,.53,-.69,.45,-.14,.61,.66,-.06,-.02,.14,.44,-.21,.17,-.1,.6,0,0,-.14,-.05,-.03,-.22,.04,.11,.68,-.08,.64,.01,.48,.1,-.19,-.05,.63,.03,0,-.01,-.68,-.1,-.19,-.32,.3,-.7,.53,.11,.07,.28,.3,.56,.78,-.11,-.64,-.02,.15,-.11,-.12,0,.01,.55,.53,-.11,.3,-.09,.03,.16,-.04,-.01,.03,.26,-.06,-.04,.11,.05,-.01,.03,-.14,.1,-.15,-.05,-.23,.49,.21,-.22,-.05,-.11,.28,-.27,-.25,.05,.64,.09,.33,.51,.11,.11,.73,-.14,.08,-.11,.08,-.06,.13,.3,.03,.54,.5,-.1,.24,-.02,-.08,.68,-.23,-.09,.02,.31,-.08,-.18,-.3,.57,.38,.5,.31,.21,.08,-.12,-.28,-.02,.04,.47,-.26,-.14,-.03,.29,.49,.21,-.48,.41,.69,0,.27,.31,.37,.67,-.2,.26,.76,-.01,.47,.75,.02,-.5,.05,0,.45,-.25,.18,-.29,-.52,.44,-.02,-.31,.8,-.5,.8,.75,-.11,.04,.67,.54,-.3,-.41,-.07,.2,.56,.19,.4,.05,.55,-.12,-.14,.41,.51,.02,-.56,-.29,-.24,.31,.23,.55,-.36,.46,-.22,.24,-.36,-.06,-.01,.42,.3,-.03,-.05,.63,.76,-.25,.04,.67,.6,-.14,.01,-.28,.54,-.22,-.08,.18,.69,-.03,.42,.45,.69,-.26,.1,-.46,.4,.63,.05,.28,-.05,.05,.14,-.04,.25,.36,-.18,.34,.47,.06,.73,.65,.85,.45,.37,.06,-.48,.31,.71,.14,.56,.05,.38,0,-.04,-.15,-.06,.15,-.31,.13,.69,.55,-.18,.82,.02,-.23,-.5,-.1,.69,-.11,-.25,.83,.78,-.43,-.49,.54,.03,.84,.25,.79,-.2,.77,.72,.06,.77,.07,-.08,-.13,.48,.22,-.29,.59,.68,.06,-.18,.54,.45,-.04,.01,.34,-.07,-.39,.22,.25,-.38,-.05,.84,.03,.67,.51,.49,.02,-.05,-.03,.54,.63,.76,-.13,-.01,-.13,-.07,.15,.45,-.06,.71,-.08,-.12,.29,-.02,-.11,.53,-.34,-.21,.78,-.67,.58,-.11,-.14,-.11,.53,-.38,-.47,.32,-.03,.77,-.06,.76,.04,.43,-.14,.33,-.32,-.19,-.08,.61,-.09,.48,.13,-.12,-.1,.65,.13,.08,.04,.17,.52,.77,.63,-.1,.24,-.2,.78,.34,.83,.48,.36,-.09,.13,.02,.45,.41,-.15,.65,-.09,.64,.6,-.7,.34,-.15,.16,.3,.46,.58,.05,.28,-.11,-.25,-.29,.21,-.01,.69,.76,.83,-.4,-.06,.75,-.1,.24,-.03,-.15,-.25,-.11,-.01,.74,.21,-.19,-.28,.07,.28,.02,.07,.68,-.13,-.23,.51,.38,.77,.56,.09,.41,.32,.45,.11,.29,.59,.64,-.06,-.17,-.2,.02,.75,.36,.06,-.04,-.52,.07,.27,.59,.38,-.25,-.41,-.29,.28,-.41,-.13,-.29,-.18,-.08,.11,.46,.32,-.03,.67,.8,.19,.63,.22,.61,.58,-.02,-.02,0,.59,-.39,.19,-.18,.14,.82,.57,.36,-.07,.45,-.51,-.2,.75,.74,.21,-.03,-.03,.53,.22,-.2,.29,-.08,.07,-.01,-.31,.16,-.27,.09,.53,-.1,-.16,.44,-.19,.09,.85,.45,.66,.5,-.1,-.2,.42,.04,.51,.46,-.23,.63,.04,.07,0,-.27,.03,.43,-.42,-.33,.14,.34,.78,.58,.52,.08,-.21,.05,-.02,.24,.13,-.37,.53,.79,.28,-.19,.48,.57,.36,-.27,-.39,-.42,.82,-.17,.77,.63,.6,.02,.06,.66,.03,.45,.08,.57,.5,-.08,.06,.56,-.21,.71,.35,.4,.05,.37,.05,-.06,.12,.53,-.25,-.05,.74,.32,-.39,.59,.7,.29,.2,.12,.54,.15,-.26,.56,-.04,.06,.68,-.13,.6,.29,.32,.44,.34,.49,.09,.09,.67,-.14,.13,-.52,-.12,.56,.44,.16,.87,-.03,.38,.58,.53,.64,.68,.39,.91,.83,.73,.1,0,.36,.38,.22,.46,-.25,.73,1,-.01,.4,.6,.48,.66,.45,.2,-.1,.88,.43,.42,.23,.45,.64,.35,-.04,.72,.88,.26,.6,.01,.55,.4,-.52,.79,.41,-.15,.16,.87,.5,.82,.26,.44,.21,.8,.52,.83,-.43,-.37,.37,.09,.01,.51,.38,.29,.38,-.44,.28,.29,.42,.78,.8,-.04,-.41,.69,.19,.41,.77,0,-.03,.41,.34,.48,.66,.53,.78,.08,.77,-.15,.64,-.04,.41,-.11,.09,.17,.2,.73,.06,.61,.23,.66,-.14,.42,.93,.53,.65,.55,.6,-.04,-.02,-.05,.48,.46,-.02,-.32,.58,.92,.57,-.07,.89,-.07,-.06,.73,.16,.62,.23,.37,.57,.61,.76,.66,.22,.71,.55,.84,.55,-.3,.66,.06,-.31,.68,-.07,.82,.01,.82,.73,.02,.66,-.2,.04,.11,.62,.25,.26,.31,-.1,-.01,.51,.06,-.19,.02,.65,.71,.35,.04,.63,.31,.4,.53,.54,.58,-.1,-.08,-.26,.53,0,-.51,-.06,.6,.64,.45,.67,.79,.46,-.27,.56,.84,-.4,.32,-.16,.67,.55,.25,-.32,-.18,.04,-.22,.16,.25,.81,.56,.6,-.09,.37,.53,.63,-.06,.06,-.21,-.02,.91,-.19,.77,.37,.58,.65,.22,.77,.45,.78,-.29,.18,.04,.13,-.48,-.1,-.12,-.68,-.07,-.16,.03,-.07,-.12,-.02,.7,.77,.04,.52,.67,-.48,.83,-.28,-.36,-.69,-.01,.7,.67,.72,.37,-.06,.56,.22,.52,.64,.34,.06,.68,.58,.58,.58,.58,.3,-.06,.79,.61,.86,.26,-.46,.09,.01,.61,.02,.63,.13,.43,.6,.74,.79,.7,.62,.79,-.01,.75,.08,-.25,.74,.24,-.14,.05,.57,.61,.72,.34,.37,.43,.44,.75,.42,.02,.08,-.01,-.02,-.04,.38,-.27,.13,-.09,.61,-.02,.27,-.32,.06,-.05,-.02,-.27,-.36,.62,.05,.25,.44,.39,.17,.66,-.32,-.4,-.24,.12,.56,-.04,.15,.73,.59,.47,-.07,.74,-.25,.61,-.12,.63,.19,.46,.47,-.05,.25,-.01,.28,.13,-.4,-.31,-.2,.8,.77,.59,.57,-.17,-.21,.54,.48,.37,.08,-.03,-.14,.61,.61,.07,.55,.68,.19,.4,.18,.74,.74,-.45,-.08,.43,.6,.51,.07,-.43,.39,-.18,-.17,-.17,.68,-.09,.12,.6,.24,.12,.73,.05,.03,-.11,.84,-.36,.39,.27,-.01,-.19,.15,.63,.04,-.12,-.03,.41,-.06,.63,.69,.78,-.42,.8,.76,.58,.52,.58,.11,.23,.54,.64,.17,-.11,.14,-.1,.24,.78,.56,-.28,.47,-.11,.5,.58,.14,.14,.07,-.01,-.44,-.22,.05,.07,.58,.67,.59,.75,.6,.07,.44,.45,-.06,.18,-.2,.21,.65,.5,.19,-.12,-.62,.34,.61,.02,.86,.46,.64,.38,.11,.56,-.53,.61,.68,.7,.13,.8,.21,.75,.52,-.03,.25,.76,.5,.61,.63,.67,.64,-.43,.64,.16,.52,-.1,.58,.65,.64,.61,.76,-.19,.74,.57,.09,-.44,.56,-.01,.66,-.33,.07,.75,.43,.76,.84,-.26,.02,-.32,.1,.77,.16,.48,.48,.61,-.35,-.45,.08,-.15,-.37,.02,.35,.1,-.04,.55,-.01,.05,.66];export{a as rvalData};
