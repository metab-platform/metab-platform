const a=[.03,.08,.03,.64,0,.16,.49,0,0,.86,0,1,.87,.02,0,.22,.5,.6,.2,.13,.91,.62,.44,0,0,0,.95,.67,.64,.96,0,.37,0,.04,0,.91,0,0,.49,0,.52,0,.1,.4,.88,0,.05,.01,0,.15,0,.21,.74,0,.05,0,0,.28,.32,0,.33,0,.01,.77,0,.21,0,0,.03,.16,.34,0,.09,.04,.01,.32,.88,.52,.15,.35,.06,0,.36,0,.78,.33,0,.11,.01,0,.05,.56,0,0,.04,.07,0,.23,.93,.2,.52,0,.03,.3,.01,.23,.44,.66,0,.11,.73,.03,.74,0,.01,0,.72,.75,.01,0,.3,.55,.06,.75,.56,0,.03,.57,.03,0,.24,.61,.79,.93,.25,.49,.52,.34,.36,.01,0,.1,.01,0,.44,.86,.77,.13,0,.58,0,.02,.81,.61,.09,.34,.96,.7,.03,0,.37,.07,.41,.22,0,.38,.02,.48,.63,0,.88,.75,.33,.6,0,.4,.75,.38,.79,0,.47,.87,.07,.04,.02,.93,.22,.16,.19,.6,.04,.13,.26,0,0,0,.07,.94,.97,.37,.01,0,0,.41,.95,.01,.85,.51,.1,.44,.73,0,.55,0,.23,.72,.85,.1,.63,.54,.19,.05,.53,0,0,0,.74,.8,.13,.36,.94,.08,0,.15,.26,.97,0,0,.05,.83,.52,0,.03,.31,0,.4,.85,.34,.64,.1,.85,.06,.05,0,0,.17,.99,0,.92,.21,.35,.02,0,0,.04,.02,.92,0,0,0,.74,.38,0,.15,0,.51,.39,.42,0,.01,.66,.83,0,0,.14,0,.17,0,.3,.1,0,.29,0,.11,.04,.11,0,.1,.98,.37,.44,0,.27,.37,.75,0,.04,.17,.06,0,0,.07,.79,.32,.16,.29,.02,.07,.43,.67,0,.55,0,0,.18,.3,0,0,0,.22,.14,.02,0,.4,.24,.18,.51,.15,.01,.03,0,.13,.6,.7,0,.01,.42,.7,.06,.13,0,.01,.16,.15,.2,0,.67,.08,.05,.14,0,.9,.64,.47,.21,0,.24,0,.44,.05,.02,.27,0,.44,.67,.12,.18,0,.34,.18,.53,.9,.53,.73,.98,0,.04,.46,0,0,.01,.79,.56,.12,.02,0,.8,.03,0,.36,.8,.09,.04,0,.85,.88,0,.03,.02,.11,.32,.04,.46,.01,.54,.25,0,0,.63,.41,.86,0,.77,.46,0,0,0,.63,.63,.32,.03,.6,0,.91,.04,.01,.54,0,0,0,.02,0,0,.01,.59,.01,0,0,0,.22,0,.2,0,.23,.74,.8,.11,0,.46,0,.24,0,.02,.59,.2,0,0,.13,0,0,.48,0,.03,.78,.43,0,0,0,0,.48,.02,0,.09,0,.42,.57,.06,.01,0,.61,.19,.94,.06,0,.04,0,.09,1,0,.7,.84,0,0,0,0,.13,.05,0,0,.64,0,.42,0,.92,.69,.94,.43,.07,.71,0,.12,.01,.06,.92,.33,.64,.17,.32,.06,0,.18,.15,.92,.07,.91,.47,.66,0,.01,.3,.06,.16,.96,.49,.03,.48,.65,.3,.12,.03,.86,0,0,.43,0,.78,.06,.57,.11,.51,.54,.86,0,.08,.64,.29,.41,.43,.74,.98,.31,.22,0,.57,0,.01,.21,.59,.73,.56,.04,.27,.02,.66,.01,0,0,.71,.88,0,.99,.27,.37,.09,.06,0,0,.01,.85,.05,0,0,.03,.2,.04,.57,.91,.02,.67,.01,.16,0,.13,.15,.26,.28,0,.24,.78,.99,.51,.27,.22,.67,.49,.34,.03,.12,.01,.6,.8,.18,.78,.84,.05,.02,0,.7,.98,.28,.16,0,.65,.72,.3,0,.01,0,.29,.01,.75,0,.17,0,0,.01,0,.46,.25,.04,0,.08,0,.07,.13,1,.77,.41,0,0,0,.96,.53,.72,.09,.02,0,0,.24,.74,.63,.01,.01,0,.47,.65,.03,0,0,.03,.35,.16,.01,.95,.01,.13,.46,.04,.1,.01,0,0,0,.02,.77,.83,.04,.13,.9,.79,0,.41,.93,0,.46,.47,0,.49,.63,.92,0,0,0,.82,0,.03,.7,.63,.2,.43,.03,.05,0,.56,.01,.61,0,.75,.85,.26,0,.02,.59,.57,.47,.19,0,0,.18,.39,.28,0,.99,.18,0,.01,.02,.71,0,.97,.08,.16,0,.53,.48,.02,.01,.43,.12,.29,0,.08,0,.78,.5,.3,.85,0,0,.18,0,0,.84,.01,.21,.05,.08,.55,.01,.09,.42,.32,.05,0,0,.12,.01,0,.19,.54,0,.85,.06,.02,0,0,0,.66,.19,1,.58,.01,0,.38,0,.75,0,.12,.42,0,.42,0,.1,0,.98,0,.38,.3,.14,.88,.13,0,.03,.59,.23,.18,.09,.2,.8,.22,.05,0,.78,.62,.28,.21,.37,.06,0,.13,.09,.89,0,.83,.87,.09,.13,.16,0,0,0,0,.07,.06,.01,.01,.04,.34,.02,.19,.18,.23,.14,.51,.05,.15,.09,.11,.79,.68,.83,0,0,0,0,.98,.2,0,0,.38,0,0,.02,.37,.01,.1,0,.02,.44,0,0,.54,.69,1,.39,0,.39,.95,.8,.87,.02,.57,.76,.04,.19,0,.82,.37,.82,.7,.11,.69,.59,.01,0,.01,.22,0,0,.05,.16,.11,0,0,0,0,.23,.68,.1,0,.99,.18,.31,0,.85,.53,0,0,.59,.61,.01,.19,.1,.1,.46,.01,0,.2,0,0,0,.01,.25,.16,.01,.62,.44,.01,.12,.23,.15,.29,0,.05,0,.17,.87,.84,.25,0,0,.86,.87,.03,0,.01,.03,.6,.92,.81,.01,.93,.49,.77,.39,.57,.81,.2,.9,.25,.98,.16,.15,.15,.82,.03,.46,.34,.01,.44,.01,0,.03,.41,.31,.05,0,.47,0,.56,0,.97,0,.03,.82,.58,0,.48,.85,.33,.37,.79,.2,.09,.71,0,0,.01,.02,.28,.16,0,.58,.06,.65,.46,.11,.2,.69,.5,.53,0,.51,.02,0,.15,.09,.88,.04,0,.21,.84,.05,0,.14,.03,.4,0,.07,.09,.07,.94,.72,.01,.22,0,0,.3,.2,0,.37,.09,.3,.5,.31,.8,.92,.4,.37,0,.09,.02,.01,.16,.97,.09,.11,.06,0,0,.01,.39,0,0,0,0,0,.73,0,.84,.99,.87,.43,.57,.71,.69,.61,0,.37,0,.49,0,.5,.07,.83,.57,.26,0,.02,.92,.17,0,0,.27,.08,.01,0,.1,.63,.76,0,.03,.13,0,0,.34,0,.27,0,.78,.14,.67,.43,.03,.01,.32,.33,.15,.56,.38,0,0,.08,.92,0,.02,0,0,.2,0,.33,.78,0,.37,0,.76,0,.84,0,.55,.96,.7,.3,0,.03,.28,0,0,.43,.31,.02,.01,.96,.03,0,.75,.96,.02,.02,0,.05,0,.86,0,.18,.01,.4,.32,.75,.59,.01,.2,.01,.07,0,.28,.03,0,.83,.37,.69,0,0,.37,.51,.11,.2,.39,.23,.01,.19,0,0,.86,.02,0,0,.91,.08,.3,0,0,.01,.25,.44,.58,.81,.52,0,.98,0,.7,.14,.03,.22,0,.06,.03,.02,.01,.01,0,0,.26,.56,.72,.62,.49,.05,.7,.01,.09,0,0,.49,.93,.18,.43,.14,.08,.06,.63,0,.27,0,.73,0,.62,.68,.86,0,0,0,.07,.02,.4,.03,.03,0,.44,0,0,0,.4,.04,0,.86,.14,0,.78,.6,0,.02,.02,.11,.57,.82,0,0,.07,.44,.18,.22,.01,.4,.59,.18,.02,.25,.77,.52,0,.03,0,0,.01,.81,.15,.38,0,0,.46,.19,0,0,.12,.9,.02,.6,.08,.21,.11,.04,0,.28,.09,.53,.14,.35,.21,0,0,.87,0,.23,.01,.01,.15,.71,.08,.61,0,0,0,.17,0,.13,.32,.15,.24,.48,.02,.03,.31,.19,.02,.05,.4,.04,0,.39,0,.49,.29,0,0,.93,.08,0,.16,.55,.14,.28,.1,0,0,.01,.18,.12,.37,0,0,.33,.12,.04,0,.85,.61,.05,.06,0,.42,.43,.37,0,.3,0,.71,.54,0,.72,.88,0,.24,0,0,.37,.27,.06,.44,.45,0,.76,0,.15,.3,.71,.46,.69,0,.02,.2,.99,0,0,0,0,.61,.21,.09,.4,.41,0,.49,.01,0,.59,.07,.52,0,.81,.84,.71,.27,.01,.31,0,0,.02,.12,.12,.03,.17,.08,.67,0,.11,.02,.37,.14,1,0,0,.3,.05,.12,.33,.23,.95,0,0,.01,0,.84,.01,0,0,.03,.25,0,0,.33,.1,.09,.4,.42,0,.09,.13,0,.09,.24,.03,.29,.76,.74,0,.57,.82,.76,.03,0,.26,0,.05,.92,.1,0,.58,0,0,.92,.24,.01,0,0,.23,.5,0,0,0,0,0,.31,.18,.1,0,.56,0,.01,.7,.02,.5,0,.28,.85,0,.97,0,.27,0,.19,0,0,.5,0,.97,.16,.04,0,.09,.62,0,.05,.05,.02,.01,.14,.03,0,.01,0,.3,.49,0,.35,0,.99,.57,0,.17,.11,.2,.01,.01,.04,.29,.95,.08,0,.02,.02,.13,.03,0,0,.45,.01,.1,0,.78,0,.34,.04,.12,.23,.36,.14,.69,.01,.05,.01,0,.63,.2,.21,.28,.03,0,0,0,0,.03,0,.04,.23,0,.28,.66,0,.34,0,.06,.79,.01,.14,.62,.19,.15,.29,.96,0,.01,0,0,.8,.05,.03,.02,0,0,.01,.01,.97,0,.82,.03,.38,.16,0,.18,0,.11,0,0,.69,.89,0,.36,.09,.04,.46,0,.8,.18,0,0,0,.22,0,0,0,0,0,0,.42,.73,.6,0,.67,.05,.81,.92,.87,.51,0,.33,.47,.19,0,.63,.98,0,.02,.03,0,0,.09,.01,.5,.16,.04,.55,.18,.25,0,.5,0,.54,0,.94,.04,.01,.61,.01,.11,.04,.01,0,0,.94,.29,0,0,.74,.74,.94,0,.54,.03,.01,.01,.22,0,.56,.13,.09,.43,0,.05,.12,0,0,.16,.32,.03,.38,.4,.64,0,0,0,.48,0,0,.3,0,.01,.03,.78,0,0,0,.03,.04,.07,.15,.17,.02,.05,.03,.8,.46,.22,0,0,.03,.66,0,0,0,.19,0,0,.06,.99,.02,.07,.19,0,.39,.52,.3,0,0,0,0,.17,.28,.34,.03,.82,.5,.87,.1,.32,.73,0,.06,0,.01,0,.21,0,.02,.45,.18,.04,.7,.76,0,.54,.36,0,.11,.5,.01,.04,.22,.32,.44,0,.98,.18,0,.14,0,.05,0,.74,0,.22,0,.02,.17,.34,.45,0,.04,.89,.07,0,.92,.42,.02,0,.02,.01,0,.86,0,.31,.34,.77,.54,.23,0,.01,.07,0,0,.01,.67,.07,.01,0,.93,.8,.01,.19,0,.31,.9,.02,0,.85,.43,0,.83,.08,0,.53,.04,0,.01,.68,.04,0,0,0,.03,.6,.83,.26,0,0,.48,.93,.15,.07,0,0,.59,.02,.4,.01,0,0,0,.88,.5,.09,0,.44,0,.49,.05,.15,0,0,.19,0,.13,0,0,.78,.01,.31,.31,0,.57,.6,.43,.05,.01,.06,0,.08,.83,0,.08,0,0,.12,.99,0,0,.17,.02,0,.05,0,0,.13,.79,0,.71,.81,0,0,0,.01,0,.41,.03,.42,.03,.13,.01,0,.3,0,.02,0,0,0,.06,0,.01,.73,.07,0,0,0,0,0,.48,.01,0,.02,0,0,.76,0,.54,.99,.01,.21,0,0,.25,.56,.21,.3,.01,1,0,.07,0,.04,.94,.57,.97,.07,.89,0,0,.2,0,.89,.38,.09];export{a as pvalData};
