const a=[.07,.86,.16,.81,.21,0,.3,.27,.76,.84,.17,.23,.27,.02,.39,.73,.36,.46,.16,.88,.92,.4,.59,.92,.4,.22,.31,.01,.53,.5,.13,.43,.04,0,.05,.99,.04,.8,.75,.11,.89,.18,.02,.18,.51,.97,.15,0,.78,.47,.58,.01,.74,.42,.03,.84,.82,0,.27,.15,0,.04,.41,.66,.57,.77,.07,.9,.9,.23,.75,.08,.07,.87,.36,.29,.93,.02,.54,.21,.05,.11,0,.19,.56,.19,.31,.98,.11,.58,.13,.78,.97,.43,.32,.57,.33,.13,.43,.01,.02,.23,.08,.01,.16,.11,.25,.09,.03,.48,.47,.19,.92,.97,.55,.36,.74,.76,.09,.43,0,.12,.02,.84,.56,.73,.35,.79,.61,.18,.88,.88,0,.82,.07,.32,.17,.89,.83,.09,.03,.01,.3,.21,0,.19,.05,.01,.13,.19,.15,.75,.86,.36,.69,.03,.24,0,.02,.66,.34,.2,.51,.81,.92,.07,.1,.78,.32,.26,0,.74,.52,.84,.42,.93,.06,.33,.08,.05,.11,.18,.29,.48,.25,.04,.14,0,.32,.09,.11,.29,.23,.07,.02,.05,.07,.69,.74,.37,.24,.04,.15,.37,.73,.01,.4,.54,.01,.16,.9,.34,.25,.38,0,.07,.94,.54,.88,.07,.6,.28,.2,.11,.74,.17,.61,.55,.01,.36,0,.08,.5,.46,0,0,.56,.28,.08,.82,.15,.57,.6,.12,.8,.82,.3,.14,.52,.06,.51,.29,.15,.18,.06,.38,.36,.45,.87,.66,.32,.95,.6,.04,.17,.15,.23,.16,.91,.08,.27,.45,.12,.45,.56,.1,.6,.03,.2,.94,.12,.24,.75,.01,.87,.09,.12,.05,.61,.87,.76,.97,.02,1,.79,.01,.92,.37,.4,.73,.45,.18,.43,0,.45,.48,.81,.03,.18,.85,.15,.26,.04,0,.31,.91,.39,.5,.38,.52,.37,.49,.93,.2,.67,.84,.02,.21,.72,.83,.25,.72,.68,.03,.81,.02,.97,.25,.74,.63,.09,.03,.81,.39,.42,.2,.77,.05,.05,.3,.09,.4,.04,.77,.04,.54,.1,.19,.24,.55,.65,.42,.57,.02,.01,.28,0,.13,0,.88,.74,.06,.8,.22,0,.38,.87,.4,.03,.08,0,.48,.88,.3,.68,.96,.06,.24,.13,.05,.28,0,.29,.21,.05,.12,.77,.24,.18,.68,.98,.16,.14,.67,.35,.38,.75,.21,.43,.3,.7,.37,.32,.31,.04,.19,.12,.11,.13,.04,0,.61,.1,0,.38,.15,.05,.02,.32,.58,.9,.27,.33,.01,.98,.73,.07,.05,.1,.01,.04,.31,.21,.57,.73,.01,.03,.07,.72,.7,.22,.74,.11,.8,.52,.91,.3,.06,.01,.32,.42,.02,.6,.02,.75,.3,.02,.68,.89,.4,.13,.05,0,.04,.18,.07,.09,.72,.04,.34,.06,.64,.07,.84,.82,.77,.44,.98,.77,.4,.33,.26,.06,.58,.02,.15,.23,0,.3,.25,.2,.12,.41,.66,.26,.02,.01,.03,.07,.02,.04,.07,.18,.58,.8,.89,.01,.58,.03,.61,.04,.05,.08,.09,.02,0,.14,.11,.5,.01,.42,.33,.75,.73,0,0,.21,.24,.66,.68,.55,.49,0,.49,.05,.58,0,.45,.96,.83,.14,.15,.12,.23,.33,0,.47,.92,.51,.98,.55,.73,.72,.79,.01,0,.95,.37,.04,.46,.47,.42,.24,.98,.15,.17,.74,.28,.32,.16,.04,0,.25,.9,.57,.4,.07,.13,.35,.09,0,.92,.41,.02,.87,.8,.55,.57,0,.27,.16,.34,.2,.02,.6,.42,.26,.21,.01,.62,.91,.04,.2,.09,0,.67,.1,.94,.21,0,.9,.89,.29,.11,.76,.01,.47,.2,.08,.17,0,.06,.72,.14,.56,.31,.03,.35,.7,.31,.01,.03,.47,0,.27,.06,.76,.22,.03,.48,.04,.82,.76,.1,.04,.15,.64,.06,.68,0,.09,.05,.08,.03,.85,0,.01,.75,.27,.19,.74,.04,0,.49,.12,.37,.11,.52,.29,.06,.18,.66,.01,.04,.03,0,.76,.38,.05,.53,.87,.67,.39,0,.01,.08,0,.02,.5,.42,.21,.86,.29,.45,.15,.19,.18,.2,.13,.29,.08,.61,.38,.56,.31,.78,.55,.25,.01,.95,.95,.1,.03,.03,.06,.79,.5,.36,.02,.72,.41,.38,.07,.7,.22,.39,.11,.44,.05,0,.38,.01,.66,.6,0,.35,.36,.13,.48,.09,0,.75,.32,.02,.26,.88,.56,.9,0,.95,.34,.66,.15,.38,.94,.71,.16,0,.08,.02,.24,.07,.22,0,.21,.78,.37,.72,.02,.33,.21,.81,.29,.09,.34,.08,.21,.02,.17,.81,.65,.91,.13,.82,.1,.89,.14,.17,.76,.15,.05,.29,.02,.11,.02,.77,.38,.08,.1,.07,.58,.28,.05,.66,.63,.1,.01,.59,.66,.05,.01,.16,.61,.72,.01,.08,.32,0,.65,.05,.94,.18,.07,.86,.18,.73,.21,.09,.01,.3,0,.05,0,.46,.9,.26,.16,.6,.37,.26,.36,.69,.21,.43,.03,.25,.02,.76,.49,.05,.11,.21,.41,.55,.4,.68,.02,0,.52,.98,.82,.04,.11,.2,.15,.4,.84,.75,.73,0,.28,.05,.15,.1,.82,.06,.08,.66,.02,.51,.2,0,.01,.11,.07,0,.97,0,.13,.44,.2,.36,.45,.41,0,.05,.2,.32,.03,.64,.03,.3,.36,.51,.29,.01,.01,.04,.62,.72,.05,.19,.24,.77,.02,.32,.03,.06,.46,.48,.15,.07,.68,.21,.34,.13,.35,.57,0,.11,.03,.59,.04,.22,.13,.03,1,.02,.76,.48,.69,.16,.85,.85,.32,.01,.07,.24,.36,.09,.06,.31,.7,.17,.27,.61,.03,.35,.02,.84,.04,.01,.91,.93,.52,.34,.18,.61,.14,.03,.22,.72,.56,.85,.31,.44,.66,0,0,.35,.6,.94,.26,.69,0,.52,.6,.97,.52,.69,.99,.46,.31,.02,.28,.6,.01,.05,.15,0,.53,.05,.33,.3,.39,.71,.09,.36,.27,.05,.41,.22,.14,.31,.59,.53,.03,.88,0,.54,.51,.68,.01,.96,.46,.09,.17,.59,.67,.12,.3,.14,.01,.28,.42,.2,.12,.46,.79,.84,.34,.19,.75,.74,.14,.84,.92,.05,.08,.11,.22,0,.08,.5,.88,.04,.74,.72,.49,.66,.03,.08,0,.09,.93,.16,.36,.26,.01,.21,0,.66,.21,.07,.01,.6,.02,.04,.29,.31,.06,.61,.15,.79,.61,.44,.49,.94,.03,.08,.58,.07,.49,.92,.12,.04,.12,.47,.06,.81,0,.18,.09,0,.76,0,.13,.3,.07,.13,.4,.44,.11,.06,.47,0,.29,.82,.11,.39,.52,.05,.13,.07,.09,.22,.08,.82,0,.39,.18,.01,.53,.48,.05,0,.33,.1,.29,.17,.01,.61,0,.37,.02,.51,0,.08,.01,0,.43,.96,.04,.68,.2,.34,.16,.14,.37,.01,.37,0,.01,.87,.46,.54,.31,.01,.15,0,.54,.5,.61,.33,.05,.01,.19,.2,.51,.51,.67,.62,.9,.3,.04,0,.54,.23,.05,.67,.04,0,.02,.05,.66,.06,.06,.25,.88,.73,.04,.03,.01,.79,.71,.29,.59,.19,.76,.01,0,.3,.16,0,0,0,.11,.31,.07,.15,.38,.1,.17,.34,.3,.13,.12,.35,.01,0,.1,.15,.3,.64,0,.7,.02,.44,.03,0,.1,.4,.1,.01,0,1,.32,.34,.37,.18,.98,.09,.78,.76,.36,.42,.21,.59,.5,0,.64,.72,.08,.98,.87,.62,.26,.14,.29,.13,.27,0,.6,.53,.94,0,.11,.71,.52,.01,.09,.03,.14,.01,.35,.63,.41,.19,.4,.55,.1,.09,.95,.07,.73,.8,.03,.77,.16,.75,.9,.04,.13,.29,.2,.03,.24,.14,.24,.02,.62,.6,.01,.79,.51,.25,.46,.17,.31,.29,.05,.01,.97,.14,.54,.06,.71,.21,.01,0,.26,.01,.15,.57,.94,.28,.42,.07,.11,.51,.07,.47,.16,.66,.04,.11,.76,.24,.01,.33,.06,.17,0,.6,.32,.37,.19,.5,.14,.72,.88,.42,.6,.78,.31,.91,.62,.85,.06,.65,0,.76,.5,.05,.79,.71,0,0,.02,.17,.03,.15,.04,.31,.07,.07,.16,.06,.14,.06,.17,.71,.83,.21,.75,.94,.43,.17,0,.1,.01,.04,0,.77,.34,.18,.38,.66,0,.99,.31,0,.03,.37,.92,.39,.17,.09,.91,.36,.32,.23,.44,.23,.41,.18,.16,0,.02,.16,.28,.81,.81,.3,.01,.59,.3,.53,.56,.15,.16,.74,.46,.53,.36,.06,.04,.62,.62,.13,.78,.3,.09,1,.02,.22,.26,.62,.65,.21,.05,.56,.34,.59,.23,.8,.08,.22,.08,0,.97,.46,0,.64,.66,.75,.84,.99,.84,.01,.69,.11,.34,.12,.72,.35,.11,.1,.76,.31,.74,.34,.5,.03,.37,.26,.13,.95,.46,.16,.88,.34,.24,.47,.92,.57,.23,.66,.32,.98,.32,.21,.8,.23,.01,.87,.09,.02,.76,.98,.17,.2,.73,.62,.1,0,.24,.08,.21,.05,.02,.2,.52,.1,.02,.8,.09,.48,.11,.68,.75,.44,.23,.48,.01,.37,.39,.69,0,.97,.64,.22,.83,.87,.52,.9,.6,.92,.86,.53,.04,.48,.73,.45,0,.13,.71,.85,.28,.79,.96,.6,.22,.4,.29,.52,.22,.84,.06,.18,.2,.11,.46,.34,.16,.44,.09,.95,0,.2,.64,.24,.53,.35,.4,.17,0,.56,.45,.76,.38,.09,0,.04,.28,.44,.07,.43,.84,.1,.01,.19,0,.01,.11,.45,.22,.93,0,.98,.57,.91,.12,0,.48,.12,.95,.2,.09,.07,.09,.2,.3,.55,.96,.24,.6,.33,.06,.17,.69,.1,0,.55,.34,.09,.89,.19,.3,.91,.46,.13,.03,.01,.01,.59,.71,.26,.45,.18,.71,.15,.2,.75,.37,0,.31,0,.12,.05,.81,.1,.99,.37,.06,.97,.27,.88,.25,.64,.1,.81,.02,.33,.55,.14,.05,.73,.42,.29,.6,.25,.17,.36,.1,.2,.34,.13,.19,.92,.96,.88,.9,.87,.3,.02,.14,.84,.71,.22,.88,.71,.81,1,.12,.25,.25,.07,.22,.28,.22,.44,.84,.18,.1,.06,.89,.6,.69,.05,0,.29,.12,.12,.17,.08,.43,.38,.02,.03,.72,.58,.07,.1,.24,.36,0,.86,.75,.46,.96,.15,.09,.49,.01,.03,.81,.01,.45,.98,0,.36,.11,.38,.3,.45,.07,.17,0,.11,.13,.19,.05,.51,.27,.02,.42,.17,.03,.1,.09,.03,.33,.05,.28,.81,.11,.87,.13,.05,.25,.88,.16,.36,.2,.1,.03,.28,.29,.04,.11,.26,.23,.24,.02,.41,.2,.72,.16,.06,.11,.03,.03,0,.09,.1,.02,.76,.12,.25,.26,.51,.06,.51,.22,0,0,.1,.78,.62,.36,.05,0,.01,.57,.87,.19,.66,.86,.34,.28,0,.2,.62,.61,.55,.23,.37,.91,.13,.66,.07,0,.68,.24,.03,.42,.91,.52,.63,.3,.07,.06,.17,.26,.57,.98,.7,.59,0,.09,.08,0,.22,.19,.17,.05,.01,0,.67,.08,.31,.69,0,0,.13,.33,.48,.03,.03,.08,.16,.02,.77,.09,.35,.77,.88,.37,.05,.18,.04,.18,.92,.49,.4,.77,.09,0,0,.17,.08,.04,.38,.5,.01,.16,.2,.09,.38,.17,.73,.18,.86,.95,.42,.01,.71,.09,.43,.03,.06,.36,.09,.14,.39,.05,.47,.03,0,.45,.56,.26,.86,.03,.1,.84,.26,.36,.02,.94,.55,.14,.27,.08,.82,.48,.02,.06,.17,.01,.7,.01,.12,.13,.83,.05,.12,.41,.84,.88,.2,.34,.07,.93,.48,.15,.05,.21,.56,.83,.16,.09,.18,.42,.16,.01,.01,.07,.58,.38,.01,.07,.02,.31,.03,.06,.57,.81,.08,.24,.17,1,.08,.28,.1,.02,.08,.19,.27,.02,.14,.27,.48,.1,.54,.98,.06,.44,.28,.05,.29,0,.04,.68,.48,.04,.14,.67,.25,.67,.8,.79,.4,.27,.3,.01,.47,.36,.78,.56,.73,.35,.63,.01,.31,.33,.28,.11,0,.12,.08];export{a as pvalData};
