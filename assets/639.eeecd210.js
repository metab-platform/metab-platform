const a=[.01,.27,.01,.87,0,0,.15,0,.07,.57,.24,.05,.94,.29,.02,.37,.94,.1,.54,.16,.55,0,.08,.04,.59,.21,0,.33,.61,0,.48,.07,.12,.99,.41,.76,.03,.19,.19,.01,.31,.01,.53,.72,.87,.3,.32,.24,.03,.01,.82,.1,.07,.19,.06,.94,.98,0,.64,.04,0,.04,.86,.22,.01,0,.35,.02,.94,.58,.07,.03,0,.01,0,.32,.8,0,.14,.12,.06,.06,.77,.14,.03,.01,.45,.87,.03,.14,.05,.67,0,.04,.1,.6,.01,.68,.67,0,.23,.62,.93,.72,.21,.38,.13,.11,.61,.77,.18,.01,.93,0,.7,0,.14,0,.3,.72,.91,0,.59,.25,.16,.48,.02,.54,.02,.01,0,0,.26,0,.14,.56,0,.13,.01,.25,.29,.19,.94,.58,.01,.7,.46,.78,.27,.44,.54,0,.09,.03,0,.01,.28,.8,.75,.07,0,.92,.11,.39,0,0,.83,.02,0,.2,.09,.13,0,0,.55,.04,.93,0,0,.1,.55,.02,.47,0,.18,.51,.35,.42,0,.64,.58,0,.08,.04,.5,.22,.73,.63,.22,.06,.67,.02,.02,.01,.23,.7,.58,0,0,.4,0,.01,.84,.06,0,.07,.6,0,.03,.63,.2,.42,.84,.13,.38,.02,0,.03,.26,.96,.38,.26,.04,0,.06,.04,0,.5,.88,.84,0,0,0,0,0,0,.25,0,.5,.17,0,.04,.04,.61,.15,.26,.96,.17,.63,0,.61,.65,0,.21,.07,.36,.01,.74,.73,.67,.04,.28,.1,.02,.08,.06,0,0,.15,.02,0,.01,.87,.81,.01,.3,0,.07,.16,.01,0,.01,.36,0,0,.34,.35,.25,0,.02,.58,0,0,.81,.15,.35,.38,.06,.07,.44,.1,.93,.52,.01,.29,.02,.02,.13,.02,.93,.16,.41,0,.19,0,.01,.23,.5,.19,.02,.07,.27,.71,.03,0,.66,0,.02,.01,.88,0,.02,.46,.34,.01,.02,.74,0,.32,.01,.58,0,.4,.02,.12,.88,.7,.13,.06,0,.9,.3,.02,.13,.16,.08,.09,.02,.14,.56,0,.55,.37,0,.01,.03,.05,.17,.92,.01,.99,.5,.88,.14,.17,.59,.45,.32,.2,.05,.26,.1,.17,.02,.06,0,.04,.95,.43,.66,0,.17,.24,.17,.01,.64,.01,.16,.83,.73,.01,.13,.54,.22,.4,.75,.16,0,0,.1,0,.01,.02,.33,.61,0,.01,.03,.06,0,0,0,.6,.5,0,0,0,.17,.01,.27,.9,.46,.69,.5,.01,.08,0,.34,.05,.6,0,0,.08,.65,.91,.24,.02,.01,0,.24,.02,.61,0,0,.03,.28,.78,.91,.57,.17,.16,.01,.76,.93,0,.7,.22,0,.12,0,.39,.01,.04,0,.03,.02,.12,0,.01,0,.84,.09,.01,.23,.1,.03,.07,.83,.62,0,0,.73,.33,.17,.19,.38,.78,.49,0,0,.76,.04,.31,.22,.1,.05,0,0,0,.09,0,0,.3,.52,.57,.15,.97,.7,.07,.71,0,.08,.05,0,.07,.02,.65,.35,.01,.01,.69,.15,.31,0,.67,.64,0,0,.06,.88,.01,.02,.04,.01,.52,.51,.04,0,.99,.89,.04,.01,.45,0,.74,.31,.52,.74,0,.92,.07,0,.27,0,.01,0,.47,.76,.04,.55,.57,.76,.85,.07,.02,0,0,.57,.05,.02,.85,.56,.39,.19,0,.09,.65,0,0,0,.19,.01,0,0,.01,0,0,.71,.89,.58,.64,.02,.76,0,.32,.03,0,0,.21,.21,.01,.01,.01,.58,.03,.65,.04,.1,.5,0,.25,.44,.73,0,.77,.11,.55,0,0,0,0,.13,.15,.32,.01,.25,0,.21,.13,.01,.99,.31,0,.01,.82,.51,.01,.96,.09,.69,0,.13,.04,.04,.75,.14,.85,.13,.52,.4,.29,.73,.3,0,.81,0,.35,0,.38,.32,.01,.04,0,.57,0,.16,.23,.07,.54,0,.57,.5,.16,.24,.14,0,.65,.05,.13,.01,.12,0,0,0,.58,1,.41,.02,.12,0,.87,0,.49,0,.61,.8,.01,.88,.55,.83,0,.69,.06,.48,.06,0,.76,.01,.18,.03,.19,.06,.04,.27,0,0,.01,.63,.86,.01,.12,.83,.87,0,.73,.04,.16,0,.44,.04,.17,.63,0,.33,.05,.49,.66,0,.69,.73,.08,.01,.48,.73,0,.05,.67,.49,.17,.02,.01,.03,.13,.06,0,.98,0,0,0,.07,.01,.29,.65,.36,.01,.98,.04,0,.53,0,.01,.24,.98,.02,.1,.04,.01,.98,.02,.36,.03,.18,.36,.38,.72,.73,0,.65,.19,.89,.6,.44,.06,.03,.73,0,.15,.01,0,0,.7,.27,0,0,.92,.01,.84,.04,.03,.95,.18,.02,0,.09,.27,.02,.67,0,.83,.04,.51,.07,.37,0,.88,.16,.12,.03,0,.41,.22,0,.04,.14,.82,.22,.07,.27,0,.87,.08,.02,.82,.73,.04,.01,.13,.05,.05,0,.02,.21,.52,0,0,.1,.71,.05,.59,.17,0,.15,.5,.14,0,.04,0,.83,.2,0,.12,.32,.08,0,.08,.59,.13,.58,.1,.19,.02,.1,.6,.3,.04,.55,.96,0,.65,0,.15,0,.23,.9,.21,.04,.02,0,0,.62,0,.23,.03,.11,.16,0,.1,0,.04,.21,0,.01,0,.01,.03,.02,0,.25,.62,.04,.82,.5,.43,.24,.03,.34,0,.33,1,.55,0,.62,.36,.41,0,.08,.1,.32,.04,.02,.49,.41,0,.82,.21,.74,.5,.01,.08,.06,0,.02,0,.08,.14,.08,0,.08,0,.25,.1,0,.01,0,0,0,0,.28,.26,0,.01,0,0,0,.75,0,.6,.02,.54,.17,.86,.83,.33,.46,.35,.02,.53,.03,.59,.51,.81,.03,0,.01,0,.73,0,.01,.02,.2,.07,.67,.08,.19,.27,.08,.97,.35,.15,.28,0,.11,.23,.06,.68,.01,.02,0,.29,.13,0,0,0,.04,.19,0,.62,.06,.12,.38,0,.04,.02,0,.15,0,.73,.05,.01,.54,0,.26,.08,.23,.01,.27,.01,.02,0,.49,.03,0,0,0,.3,.08,.02,0,.62,.02,.18,.07,.61,.05,0,0,.78,.65,0,.83,.89,.13,.07,.05,.01,.83,0,.39,.42,.26,0,.37,0,.63,0,.24,.23,.6,.83,.2,.1,0,0,.79,.07,.12,.66,.19,0,.02,.28,0,.9,.67,.4,.02,0,.01,.09,.1,0,.16,0,.7,.76,0,.59,.02,.01,.02,.13,.59,.68,.46,.33,.01,.1,0,.11,.01,.94,.75,0,.21,.03,.01,.01,0,.35,.05,.61,.55,.05,0,.59,.75,.05,.09,.55,.06,.02,.99,.84,.01,.18,.52,0,.78,.52,.82,0,.6,.46,0,.97,.08,0,.01,.14,.01,.83,0,0,.93,.22,.59,.55,.59,.73,.13,.73,.16,.01,.18,.3,.88,.05,.01,0,0,.03,.11,.09,0,.04,.11,.44,.1,0,.01,.08,.18,.07,.01,.04,.05,.1,0,.39,.28,0,.13,.99,.66,0,.04,.33,.99,.14,.01,0,.07,.07,.07,.01,.13,.76,.96,.99,.04,.69,.03,.05,.08,.59,.1,.06,.07,0,.81,.01,0,.06,0,0,.05,0,.02,0,.52,.1,.37,.6,.02,.61,0,.37,.08,0,.71,.29,0,.3,0,.98,.11,0,.12,.54,.15,.95,.17,.52,.06,.01,0,.49,.28,.64,.31,.51,.05,.12,.28,.25,0,0,0,.02,.03,.14,0,.03,.37,.4,.47,.05,.14,0,.46,.01,.27,.32,0,.05,.2,0,.2,.29,0,.48,.14,0,.66,.56,.06,0,.54,.69,.37,0,.85,.68,.06,.01,.11,.02,.06,.12,.86,0,0,.12,.28,.98,0,0,0,.06,0,.05,.6,.25,0,0,0,.09,0,.3,.75,.02,0,0,.16,.08,0,0,0,.33,0,.57,0,0,.52,0,.1,.25,.69,.01,.48,0,.1,.01,0,.01,.29,0,.72,.01,.88,0,.44,.05,.01,.5,.02,.08,0,.04,.44,.63,.06,.11,.11,.86,.02,1,.77,.1,.47,.95,.21,.15,.01,.05,1,.32,.78,.11,.11,.07,0,.61,.06,.04,.59,.56,.12,0,.81,.07,.03,0,.08,.27,0,.34,.3,.46,.02,.03,0,.65,.68,.07,.59,.23,0,.84,.21,.92,.12,.47,.3,.03,.49,.58,.9,.43,.49,0,.74,0,0,.9,.06,.52,.09,.03,.4,.01,.32,.29,.11,0,.81,.01,0,.29,.23,0,.39,.07,.05,.87,.27,.68,.79,.57,.36,.93,0,.02,0,.1,0,.01,.01,.85,.93,.24,.05,.08,0,.66,.16,0,.18,.36,.22,.23,.04,.04,.77,.46,.66,.05,.02,.25,0,.09,.9,0,.12,.53,.68,.08,.94,.01,0,.23,0,.12,.69,.47,.24,.19,0,.73,.13,.64,.16,.87,.57,.27,.05,.85,.01,.64,.87,.88,.94,.33,.79,.07,0,.41,.27,0,.2,.19,.02,.62,.53,.02,.2,0,0,.02,.01,0,.53,.45,.08,.22,0,0,0,.02,.33,.26,.15,.42,0,.69,0,0,0,.29,.16,.44,.56,.08,0,.19,.05,.75,.12,.02,0,.01,0,.12,.25,.13,0,.03,.53,.01,.95,.05,.98,.89,.01,.72,.08,.48,.66,.83,.85,0,.69,.67,.71,0,.98,0,.36,.25,.86,.22,.33,.05,.18,0,0,.46,.74,.29,.65,.61,.44,.92,.44,.05,.59,.02,0,.04,0,.88,.01,0,.65,.04,.12,0,0,.05,.01,.02,.03,.03,0,.72,.7,.86,.9,.01,.12,.58,.16,.86,0,.87,0,.7,.54,0,0,.74,.01,.34,.02,.42,.05,.03,.03,0,.74,0,.14,.76,.35,0,.08,0,.27,.49,.22,.64,.51,.17,.67,.01,0,.03,0,.95,.05,.9,.04,.05,.04,.1,.01,0,.61,.02,.35,.1,0,.14,.06,.57,.07,0,.18,0,.44,.03,.8,.71,.85,.71,.31,0,.03,.03,0,.89,.24,.84,.97,0,.16,.81,.57,0,.53,0,.48,.08,0,.75,.45,.6,.49,.63,.27,.21,.04,0,.09,.01,0,0,.4,.62,.31,0,.03,.01,.66,.44,.49,.18,.02,.4,.26,.93,.02,.47,.01,.01,.3,.91,.11,.04,.35,.15,.01,.15,.64,.15,.2,.01,.05,.03,.02,1,0,0,0,.17,.72,.84,.07,.93,.78,.02,.78,0,.7,.06,.46,.66,.25,.01,.02,0,.56,.95,.76,.93,.02,.02,.4,.02,0,0,.21,.26,.08,0,0,.13,.82,.18,.31,.03,.74,0,.38,.24,.29,.19,0,0,.01,.92,.41,.88,0,.98,.02,.31,0,.01,.5,.16,.06,.02,0,.01,0,.11,.68,.23,.98,.7,.03,.19,.51,.51,.58,.21,.98,.19,0,.28,0,.12,.01,.78,0,.21,0,.5,.48,.14,.03,.22,.11,.22,.05,0,0,.01,0,.01,.28,.43,.95,.15,.9,.55,0,.18,.82,.08,0,.76,.17,.7,.48,.33,.78,.71,0,.02,.65,.16,.69,.24,.67,.19,.57,.09,.04,.02,.01,.01,.23,.01,0,.01,.57,.24,.43,.65,.06,.03,.04,.13,.97,.63,.77,.02,.32,0,.08,.94,.91,0,.11,0,.9,.62,.01,0,.07,.26,.62,0,.37,.04,0,.55,.02,.61,0,.02,.57,.08,.84,.02,0,.37,.07,.03,0,.77,.08,.27,.07,.1,.03,.27,.12,.07,.16,0,.85,.83,.15,.27,0,0,.13,0,.65,.14,.01,.03,.01,.44,.01,.01,.22,.52,.02,.03,.04,0,.01,0,.52,.06,0,.62,.01,.03,0,0,.19,.51,.68,0,.69,.02,.1,0,0,.01,.01,.34,.03,.56,.52,0,.11,.07,.27,.13,.38,.31,.69,.02,.02,.48,.03];export{a as pvalData};
